"use client";

import { MinecraftCard } from "../ui/minecraft/card";
import GetMarkdownContent from "./getContent";

export default function ProjectMainContent() {
  return (
    <section className="w-full lg:!max-w-[80%]">
      <MinecraftCard className="flex flex-col w-full p-5">
        <GetMarkdownContent url="/description.md" />
      </MinecraftCard>
    </section>
  );
}
