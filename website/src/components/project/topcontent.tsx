"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function ProjectTopContent({ title }: { title?: string }) {
  const t = useTranslations("project");
  return (
    <div
      className="relative w-screen h-[600px] bg-cover bg-top bg-no-repeat"
      style={{ backgroundImage: "url(/image/minecraft-java.jpeg)" }}
    >
      <span className="absolute top-2 right-2 text-neutral-500/50">
        Minecraft
      </span>
      {title && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center backdrop-blur">
          <h1 className="font-bold text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl text">{title}</h1>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center container max-w-[1300px] p-5 mx-auto rounded-t-lg backdrop-blur-md backdrop-brightness-50">
        <div className="flex flex-wrap justify-between items-center w-full">
          <div className="flex flex-row justify-center items-center">
            <div className="mr-3">
              <img
                src="/datapack/icons/icon-nobg-500x500.png"
                className="bg-neutral-100/50 border border-neutral-200/50 w-20 h-20 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-start items-start">
              <h1 className="font-bold text-lg sm:!text-xl md:!text-2xl lg:!text-3xl mb-1">
                {t(":title")}
              </h1>
              <p className="text-sm">{t(":type")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
