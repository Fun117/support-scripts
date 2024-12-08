"use client";

import { useState, useEffect } from "react";

export default function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      setViewportHeight(window.innerHeight); // ウィンドウの高さを取得
    };

    // 初回の高さを取得
    updateHeight();

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", updateHeight);

    // クリーンアップ（イベントリスナーの削除）
    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  return viewportHeight;
}
