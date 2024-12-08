"use client";

import Link from "next/link";
import { MinecraftButton } from "../ui/minecraft/button";

export default function NotFound({ title }: { title: string }) {
  return (
    <div className="relative flex min-h-[calc(100vh-80px)] flex-col justify-between items-center">
      <div
        className="relative w-screen h-[calc(100vh-80px)] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url(/image/minecraft-java.jpeg)" }}
      >
        <span className="absolute top-2 right-2 text-neutral-500/50">
          Minecraft
        </span>
        {title && (
          <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center backdrop-blur backdrop-brightness-50">
            <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text mb-10">
              {title}
            </h1>
            <Link href="/">
              <MinecraftButton variant="green" className="p-5">
                ホームに戻る
              </MinecraftButton>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
