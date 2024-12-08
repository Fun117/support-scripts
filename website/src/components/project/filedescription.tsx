"use client";

import { MinecraftCard } from "../ui/minecraft/card";
import datapack from "../../../datapack.config";
import { ReleaseChannelBadge } from "./components/releasechannel";
import { useFormatter, useTranslations } from "next-intl";
import { Separator } from "@chakra-ui/react";
import { MinecraftButton } from "../ui/minecraft/button";
import Link from "next/link";
import { MinecraftArrow } from "../ui/minecraft/arrow";
import { Calendar, Gamepad2 } from "lucide-react";
import { Tooltip } from "../ui/tooltip";

export default function ProjectFilesPreviewContent({
  version_id,
}: {
  version_id: string;
}) {
  const t = useTranslations("pages.files");
  const format = useFormatter();

  // リリースを検索
  const release = datapack.release.find((r) => r.version_id === version_id[0]);
  // リリースが存在しない場合は null を返す
  if (!release) return null;

  // リリースが存在する場合は詳細を表示
  return (
    <div className="w-full lg:!max-w-[80%]">
      <div className="flex flex-col">
        <div className="flex justify-start items-center pl-1 mb-5">
          <Link href="/files" className="flex items-center">
            <MinecraftArrow
              direction="left"
              className="!bg-[var(--mc-core-off-white)]"
            />
            <span className="ml-1">{t("back")}</span>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between mb-5 pl-1">
          <div>
            <h1 className="font-bold text-xl">{t("file details")}</h1>
          </div>
          <div>
            <Link
              href={`/datapack/release/${release.version_id}/${release.file.filename}`}
              target="_blank"
            >
              <MinecraftButton variant="green">{t("download")}</MinecraftButton>
            </Link>
          </div>
        </div>
        <MinecraftCard className="flex flex-wrap gap-3 w-full">
          <div className="flex flex-col w-full">
            <div className="mb-3">
              <h2 className="text-xl font-bold truncate">{release.title}</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ReleaseChannelBadge
                label={release.release_channel.charAt(0)}
                type={release.release_channel}
                className="w-5 h-5"
              />
              <Tooltip showArrow content={`${t("created_at")}`} openDelay={50}>
                <span className="flex items-center opacity-60">
                  <Calendar className="w-5 pr-1" />
                  {format.relativeTime(
                    new Date(release.created_at),
                    new Date()
                  )}
                </span>
              </Tooltip>
              <Tooltip showArrow content={`${t("game edition")}`} openDelay={50}>
                <span className="flex items-center opacity-60">
                  <Gamepad2 className="w-5 pr-1" />
                  {release.game_edition}
                </span>
              </Tooltip>
            </div>
            <hr className="w-full my-5" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">{t("file name")}</h1>
              <span className="opacity-60">{release.file.filename}</span>
            </div>
            <hr className="w-full my-5" />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-xl">{t("supported versions")}</h1>
              <section className="flex flex-wrap justify-start items-start">
                {release.game_versions.map((version, index) => (
                  <span key={index} className="flex items-center opacity-60">
                    {version}
                    {index + 1 < release.game_versions.length && (
                      <Separator
                        orientation="vertical"
                        className="w-[0.5px] border-x-[1px] h-3 custom-border translate-y-[1px] mx-2"
                      />
                    )}
                  </span>
                ))}
              </section>
            </div>
          </div>
        </MinecraftCard>
      </div>
    </div>
  );
}
