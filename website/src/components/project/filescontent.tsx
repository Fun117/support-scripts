"use client";

import { useEffect, useState } from "react";
import { useFormatter, useTranslations } from "next-intl";
import { MinecraftCard } from "../ui/minecraft/card";
import datapack from "../../../datapack.config";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollection, Separator } from "@chakra-ui/react";
import {
  DataPackConfigProps,
  DataPackReleaseProps,
} from "@/types/datapack.config";
import Link from "next/link";
import { ReleaseChannelBadge } from "./components/releasechannel";
import { EmptyState } from "../ui/empty-state";
import { Rocket } from "lucide-react";

interface Item {
  label: string;
  value: string;
}

function generateGameVersions(
  label: string,
  datapackConfig: DataPackConfigProps
): Item[] {
  const gameVersions: Item[] = [{ label: label, value: "all" }];
  datapackConfig.release.forEach((release) => {
    release.game_versions.forEach((version) => {
      if (!gameVersions.some((v) => v.value === version)) {
        gameVersions.push({
          label: version,
          value: version,
        });
      }
    });
  });
  return gameVersions;
}

export default function ProjectFilesContent() {
  const t = useTranslations("pages.files");
  const [selectedGameVersion, setSelectedGameVersion] = useState("all");
  const [selectedGameEdition, setSelectedGameEdition] = useState("all");
  const [selectedReleaseChannel, setSelectedReleaseChannel] = useState("all");
  const [filteredReleases, setFilteredReleases] = useState<
    DataPackReleaseProps[]
  >(datapack.release);

  const format = useFormatter();

  // 各セレクションのデータ作成
  const gameVersionCollection = createListCollection({
    items: generateGameVersions(t("all game versions"), datapack),
  });

  const gameEditionCollection = createListCollection({
    items: [
      { label: t("all game edition"), value: "all" },
      { label: "Java", value: "java" },
      { label: "Bedrock", value: "bedrock" },
    ],
  });

  const releaseChannelCollection = createListCollection({
    items: [
      { label: t("all release channel"), value: "all" },
      { label: "Release", value: "release" },
      { label: "Pre Release", value: "pre-release" },
      { label: "Beta", value: "beta" },
      { label: "Alpha", value: "alpha" },
    ],
  });

  // フィルター処理
  useEffect(() => {
    let releases = datapack.release;

    if (selectedGameVersion !== "all") {
      releases = releases.filter((release) =>
        release.game_versions.includes(selectedGameVersion)
      );
    }

    if (selectedGameEdition !== "all") {
      releases = releases.filter(
        (release) => release.game_edition === selectedGameEdition
      );
    }

    if (selectedReleaseChannel !== "all") {
      releases = releases.filter(
        (release) => release.release_channel === selectedReleaseChannel
      );
    }

    setFilteredReleases(releases);
  }, [selectedGameVersion, selectedGameEdition, selectedReleaseChannel]);

  return (
    <section className="w-full lg:!max-w-[80%]">
      <div className="flex flex-col">
        <MinecraftCard className="flex flex-wrap gap-3">
          {/* Game Versions */}
          <SelectRoot
            collection={gameVersionCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedGameVersion(value.value[0])}
          >
            <SelectLabel>{t("select game versions")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all game versions")} />
            </SelectTrigger>
            <SelectContent>
              {gameVersionCollection.items.map((version, index) => (
                <SelectItem key={index} item={version}>
                  {version.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {/* Game Edition */}
          <SelectRoot
            collection={gameEditionCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedGameEdition(value.value[0])}
          >
            <SelectLabel>{t("select game edition")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all game edition")} />
            </SelectTrigger>
            <SelectContent>
              {gameEditionCollection.items.map((edition, index) => (
                <SelectItem key={index} item={edition}>
                  {edition.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {/* Release Channel */}
          <SelectRoot
            collection={releaseChannelCollection}
            defaultValue={["all"]}
            size="sm"
            width="320px"
            onValueChange={(value) => setSelectedReleaseChannel(value.value[0])}
          >
            <SelectLabel>{t("select release channel")}</SelectLabel>
            <SelectTrigger className="minecraft-input">
              <SelectValueText placeholder={t("all release channel")} />
            </SelectTrigger>
            <SelectContent>
              {releaseChannelCollection.items.map((channel, index) => (
                <SelectItem key={index} item={channel}>
                  {channel.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </MinecraftCard>

        {/* Filtered Results */}
        <section className="flex flex-col mt-4">
          {filteredReleases.length > 0 ? (
            filteredReleases.map((release, index) => (
              <Link key={index} href={`/files/${release.version_id}`}>
                <div className="flex flex-col items-center gap-2 p-5 my-1 lg:!my-0 minecraft-card-shadow-default">
                  <div className="flex w-full">
                    <h1 className="font-bold truncate">{release.title}</h1>
                  </div>
                  <div className="flex flex-row flex-wrap justify-between items-center w-full gap-2">
                    <div className="flex items-center max-w-[80%] overflow-hidden">
                      <ReleaseChannelBadge
                        label={release.release_channel.charAt(0)}
                        type={release.release_channel}
                        className="w-5 h-5"
                      />
                      <Separator
                        orientation="vertical"
                        className="w-[0.5px] border-x-[1px] h-4 custom-border translate-y-[1px] mx-2"
                      />
                      <div className="flex gap-1 truncate overflow-hidden">
                        {release.game_versions.map((version, index) => {
                          return (
                            <span key={index} className="truncate">
                              {version}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="opacity-60">
                        {format.relativeTime(
                          new Date(release.created_at),
                          new Date()
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <MinecraftCard variant="banner">
              <EmptyState
                icon={<Rocket />}
                title={t("notfound")}
                description={t("notfound_error")}
              />
            </MinecraftCard>
          )}
        </section>
      </div>
    </section>
  );
}
