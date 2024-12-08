"use client";

import { useTranslations } from "next-intl";
import { MinecraftButton } from "../ui/minecraft/button";
import Link from "next/link";

export default function ProjectNavContent({
  nowItem,
  items,
}: {
  nowItem?: string;
  items: {
    id: string;
    href: string;
  }[];
}) {
  const t = useTranslations("project.nav.items");
  return (
    <nav className="flex flex-col-reverse lg:!flex-row items-start gap-2 container max-w-[1324px] p-5 pb-0 mx-auto">
      <div className="flex w-full mt-6 border-b border-[var(--black-02)]">
        {items.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <MinecraftButton
                variant={nowItem == item.id ? "tabActive" : "tab"}
                className={`px-[20px] py-[10px]`}
              >
                {t(item.id)}
              </MinecraftButton>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
