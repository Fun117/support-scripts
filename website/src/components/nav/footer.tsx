"use client";

import Link from "next/link";
import React, { useTransition } from "react";
import config from "../../../richtpl.config";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { TLink } from "../ui/Tcomps";
import { useLocale, useTranslations } from "next-intl";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tooltip,
} from "@nextui-org/react";
import {
  Earth,
  Github,
  Link as LinkIcon,
  Twitter,
  type LucideIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Locale, setUserLocale } from "@/services/locale";

function CustomLangSelectButton() {
  const lang = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
      router.refresh();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    console.log(isPending);
  }

  return (
    <Dropdown className="border-0 rounded-none minecraft-card-shadow-default bg-[var(--mc-core-off-black)]">
      <DropdownTrigger>
        <Button className="flex justify-start items-center gap-0 pl-0 md:!pl-4 bg-transparent rounded-none text text-sm">
          <Earth className="w-5 h-5 mr-1" />
          <span>{config.i18n.localeConfigs[lang].label}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        className="bg-[var(--mc-core-off-black)]"
      >
        {config.i18n.locales.map((locale, index) => {
          return (
            <DropdownItem
              key={index}
              className="!bg-[var(--mc-core-off-black)] mb-1 !rounded-none hover:!text-[var(--green-vanilla-03)] hover:!bg-[var(--mc-core-grey-6)]"
              onClick={() => onChange(config.i18n.localeConfigs[locale].path)}
            >
              {config.i18n.localeConfigs[locale].label}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </Dropdown>
  );
}

function Footer() {
  const t = useTranslations("Footer");

  function SocialButtons() {
    return (
      <>
        {config.themeConfig.footer?.social?.github && (
          <Link
            href={`https://github.com/${config.organizationName}/${config.projectName}`}
            target="block"
            aria-label="GitHub"
          >
            <FaGithub />
            <span className="hidden">GitHub</span>
          </Link>
        )}
        {config.themeConfig.footer?.social?.twitter && (
          <>
            <hr className="flex border-0 w-[1px] h-[19px] bg-neutral-700 dark:bg-neutral-500" />
            <Link
              href={`https://twitter.com/${config.themeConfig.footer?.social?.twitter}`}
              target="block"
              aria-label="Twitter"
            >
              <FaTwitter />
              <span className="hidden">Twitter</span>
            </Link>
          </>
        )}
      </>
    );
  }

  type linkImtesType = {
    label: string;
    url: string;
    icon: LucideIcon;
  };
  const linkItems: linkImtesType[] = [
    {
      label: "Website",
      url: "https://fun117.dev",
      icon: LinkIcon,
    },
    {
      label: "GitHub",
      url: "https://github.com/fun117",
      icon: Github,
    },
    {
      label: "X",
      url: "https://i.fun117.dev/x",
      icon: Twitter,
    },
  ];

  return (
    <footer className="w-full mx-auto overflow-hidden">
      <section className="flex flex-col w-full font-minecraft bg-[var(--mc-core-rich-black)]">
        <div className="flex justify-center items-center flex-wrap gap-5 py-10">
          {linkItems.map((item, index) => {
            return (
              <Tooltip key={index} showArrow content={item.label}>
                <Link
                  href={item.url}
                  target="_blank"
                  className="bg-[var(--mc-core-off-black)] p-3 rounded-full"
                >
                  <item.icon className="w-6 h-6" />
                </Link>
              </Tooltip>
            );
          })}
        </div>
      </section>
      <div className="max-w-full w-[calc(1200px+calc(2*24px))] mx-auto px-6">
        <div className="min-h-[400px] py-9">
          <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] lg:flex flex-wrap justify-between">
            <div className="flex flex-row justify-between items-center lg:items-stretch col-span-full">
              <img
                src="/datapack/icons/icon-nobg-500x500.png"
                width={100}
                height={100}
                alt="CraftRecycle"
                className="w-[100px] h-[100px] pointer-events-none"
              />
              <div className="lg:hidden flex flex-row justify-start items-center gap-3">
                <SocialButtons />
              </div>
            </div>
            <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] lg:flex flex-wrap">
              {config.themeConfig.footer?.items?.map((group, idx) => (
                <div key={idx} className="flex flex-col">
                  <h2 className="text-sm font-semibold mb-4">
                    {group.title_i18n ? t(`items.${group.title}`) : group.title}
                  </h2>
                  {group.contents?.map((link, idx2) => (
                    <TLink
                      key={idx2}
                      target={link.target}
                      href={link.href}
                      i18n_text={link.i18n_text || false}
                      className="text-sm font-base w-fit mb-3 text-[var(--green-vanilla-03)] hover:text-[var(--mc-core-off-white)] transition-all duration-300 ease-in-out"
                      i18n_path="Footer.items"
                    >
                      {link.label}
                    </TLink>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <section className="flex flex-col w-full font-minecraft bg-[#313131]">
        <div className="flex flex-col md:!flex-row flex-wrap items-center container max-w-[1324px] p-5 mx-auto">
          <div className="flex justify-between md:!justify-start items-center w-full md:!w-fit mb-3 md:!mb-0">
            <CustomLangSelectButton />
            <Link
              href="https://fun117.dev"
              target="_blank"
              className="md:!hidden"
            >
              Fun117
            </Link>
          </div>
          <span className="text-sm mx-auto">
            {config.themeConfig.footer?.footerText?.i18n
              ? t(`footerText`)
              : config.themeConfig.footer?.footerText?.text ||
                "Copyright © 2024 Fun117. All rights reserved."}
          </span>
          <Link
            href="https://fun117.dev"
            target="_blank"
            className="hidden md:!flex"
          >
            Fun117
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
