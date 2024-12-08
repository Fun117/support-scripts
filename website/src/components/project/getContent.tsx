"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function GetMarkdownContent({ url }: { url: string }) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    // GitHub APIのエンドポイントからMarkdownを取得
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Markdownファイルの取得に失敗しました");
        }
        return response.text();
      })
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error(error));
  }, []);

  function customReplace(value: any) {
    return (value as string).replace(/. /g, "-").replace(/・/g, "");
  }

  return (
    <ReactMarkdown
      className="markdown-body"
      remarkPlugins={[remarkGfm]}
      components={{
        h1(props) {
          const { children } = props;
          return <h1 id={customReplace(children)}>{children}</h1>;
        },
        h2(props) {
          const { children } = props;
          return <h2 id={customReplace(children)}>{children}</h2>;
        },
        h3(props) {
          const { children } = props;
          return <h3 id={customReplace(children)}>{children}</h3>;
        },
        a(props) {
          const { children, href } = props;
          if ((href as string).includes("#", 0)) {
            return <Link href={href || "/"}>{children}</Link>;
          }
          return (
            <Link href={href || "/"} target="_blank">
              {children}
            </Link>
          );
        },
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  );
}
