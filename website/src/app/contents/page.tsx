import { MinecraftButton } from "@/components/ui/minecraft/button";
import { MinecraftCard } from "@/components/ui/minecraft/card";
import React from "react";

function page() {
  return (
    <div className="flex flex-col gap-2 container p-5 mb-10">
      <MinecraftCard>
        <h1>Hello World</h1>
        <p>default</p>
      </MinecraftCard>
      <MinecraftCard variant="banner">
        <h1>Hello World</h1>
        <p>banner</p>
      </MinecraftCard>
      <MinecraftCard variant="green">
        <h1>Hello World</h1>
        <p>green</p>
      </MinecraftCard>
      <MinecraftButton variant="transparent">
        Hello World | transparent
      </MinecraftButton>
      <MinecraftButton variant="green">Hello World | green</MinecraftButton>
      <MinecraftButton variant="gold">Hello World | gold</MinecraftButton>
      <MinecraftButton variant="deepBlue">
        Hello World | deepBlue
      </MinecraftButton>
      <MinecraftButton variant="tab">Hello World | tab</MinecraftButton>
      <MinecraftButton variant="tabActive">
        Hello World | tabActive
      </MinecraftButton>
    </div>
  );
}

export default page;
