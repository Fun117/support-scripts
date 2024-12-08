"use client";

import GetMarkdownImagesContent from "./getImagesContent";
import { MinecraftCard } from "../ui/minecraft/card";

export default function ProjectImagesContent() {
  return (
    <section className="w-full lg:!max-w-[80%]">
      <MinecraftCard className="flex flex-col w-full p-5">
        <GetMarkdownImagesContent url="/datapack/images/_.md" />
      </MinecraftCard>
    </section>
  );
}
