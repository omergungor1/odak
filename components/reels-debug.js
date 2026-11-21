"use client";

import { useEffect } from "react";

export default function ReelsDebug({ info }) {
  useEffect(() => {
    console.info("[reels]", info);
  }, [info]);

  return null;
}
