import { cacheLife } from "next/cache";

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
  "upgrade-insecure-requests": "1",
};

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
  const home = await fetch("https://www.instagram.com/", {
    headers: { ...headers, "sec-fetch-site": "none" },
  });
  const cookie = (home.headers.getSetCookie?.() || [])
    .map((item) => item.split(";")[0])
    .filter(Boolean)
    .join("; ");
  const page = await fetch(`https://www.instagram.com/${USERNAME}/reels/`, {
    headers: {
      ...headers,
      cookie,
      referer: "https://www.instagram.com/",
      "sec-fetch-site": "same-origin",
    },
  });
  if (!page.ok) return [];
  return parseReels(await page.text());
}

export async function getInstagramReels() {
  "use cache";
  try {
    const reels = await loadReels();
    if (!reels.length) {
      cacheLife({ stale: 30, revalidate: 60, expire: 300 });
      return [];
    }
    cacheLife({ stale: 300, revalidate: 1800, expire: 86400 });
    return reels;
  } catch {
    cacheLife({ stale: 30, revalidate: 60, expire: 300 });
    return [];
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
