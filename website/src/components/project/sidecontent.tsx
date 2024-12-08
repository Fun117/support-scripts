"use client";

import { useFormatter, useTranslations } from "next-intl";
import datapack from "../../../datapack.config";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";
import { MinecraftCard } from "../ui/minecraft/card";
import { MinecraftButton } from "../ui/minecraft/button";
import site_config from "../../../richtpl.config";
const config = datapack;

export default function ProjectSideContent() {
  const t = useTranslations("project.sidecontent");
  const format = useFormatter();
  const dateTime = new Date(config.created_at);
  const dateNow = new Date();

  return (
    <MinecraftCard className="flex flex-col w-full lg:!w-[20%] p-5">
      <div className="flex flex-col w-full mb-3">
        <h1 className="font-bold text-lg mb-3">{t("about project")}</h1>
        <section className="flex flex-col gap-2 justify-items-stretch w-full">
          <div className="flex flex-wrap justify-between items-center justify-self-auto w-full">
            <p className="mr-3">{t("created")}</p>
            <p>{format.relativeTime(dateTime, dateNow)}</p>
          </div>
          <div className="flex flex-wrap justify-between items-center justify-self-auto w-full">
            <p className="mr-3">{t("license")}</p>
            <a
              href={config.license.link}
              target="_blank"
              className="text-blue-500 after:content-['↗']"
            >
              {config.license.label}
            </a>
          </div>
        </section>
      </div>
      <hr />
      <div className="flex flex-col w-full my-3">
        <h1 className="font-bold text-lg mb-3">{t("members")}</h1>
        <section className="flex flex-col gap-2 justify-items-stretch w-full">
          {config.members.map((member, index) => {
            return (
              <Tooltip
                key={index}
                aria-label={`${member.username}`}
                content={`${member.username} / ${member.role}`}
                showArrow
              >
                <Link
                  href={member.website}
                  target="_blank"
                  className="flex justify-start items-center w-fit rounded-lg border border-neutral-100 dark:border-neutral-900"
                >
                  <img
                    src={member.avatar}
                    className="w-10 h-10 rounded-lg"
                    alt={member.username}
                  />
                </Link>
              </Tooltip>
            );
          })}
        </section>
      </div>
      <div className="flex flex-col w-full my-3">
        <Link href={`https://github.com/${site_config.organizationName}/${site_config.projectName}`} target="_blank">
          <MinecraftButton variant="transparent" className="w-full">{t("source code")}</MinecraftButton>
        </Link>
      </div>
    </MinecraftCard>
  );
}
