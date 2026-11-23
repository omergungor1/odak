import { fallbackReels } from "@/lib/reels-fallback";

const USERNAME = "odakbursacom";

const headers = {
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
  "sec-ch-ua": '"Chromium";v="131", "Google Chrome";v="131", "Not_A Brand";v="24"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
};

function cookieHeader(response) {
  const list = typeof response.headers.getSetCookie === "function" ? response.headers.getSetCookie() : [];
  if (list.length) return list.map((item) => item.split(";")[0]).filter(Boolean).join("; ");
  return response.headers.get("set-cookie") || "";
}

function findClips(value) {
  if (!value || typeof value !== "object") return null;
  if (value.polaris_clips_connection?.edges) return value.polaris_clips_connection.edges;
  const list = Array.isArray(value) ? value : Object.values(value);
  for (const item of list) {
    const found = findClips(item);
    if (found) return found;
  }
  return null;
}

function parseReels(html) {
  const scripts = html.matchAll(/<script type="application\/json"[^>]*>([\s\S]*?)<\/script>/g);
  for (const match of scripts) {
    if (!match[1].includes("polaris_clips_connection")) continue;
    let edges;
    try {
      edges = findClips(JSON.parse(match[1]));
    } catch {
      continue;
    }
    if (!edges?.length) continue;
    return edges
      .map((edge) => edge.node)
      .filter((node) => node?.code && node.display_uri)
      .slice(0, 10)
      .map((node) => ({
        code: node.code,
        href: `https://www.instagram.com/reel/${node.code}/`,
        image: node.display_uri,
        views: Number(node.play_count) || 0,
      }));
  }
  return [];
}

async function loadReels() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    const home = await fetch("https://www.instagram.com/", {
      headers: { ...headers, "sec-fetch-site": "none" },
      cache: "force-cache",
    });
    const cookie = cookieHeader(home);
    const page = await fetch(`https://www.instagram.com/${USERNAME}/reels/?hl=tr&attempt=${attempt}`, {
      headers: {
        ...headers,
        cookie,
        referer: "https://www.instagram.com/",
        "sec-fetch-site": "same-origin",
      },
      cache: "force-cache",
    });
    const html = await page.text();
    const reels = page.ok ? parseReels(html) : [];
    if (reels.length) return reels;
  }

  return [];
}

export async function getInstagramReels() {
  try {
    const reels = await loadReels();
    return reels.length ? reels : fallbackReels;
  } catch {
    return fallbackReels;
  }
}

export function formatViews(count) {
  if (count >= 1000000) {
    return `${(count / 1000000).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} Mn`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toLocaleString("tr-TR", { maximumFractionDigits: 1 })} B`;
  }
  return count.toLocaleString("tr-TR");
}
