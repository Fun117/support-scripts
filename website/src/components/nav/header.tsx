"use client";

import config from "../../../richtpl.config";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { TLink } from "@/components/ui/Tcomps";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import useViewportHeight from "@/hooks/useViewportHeight";

function Header() {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const ViewportHeight = useViewportHeight();
  const [navCustomHeight, setNavCustomHeight] =
    useState<number>(ViewportHeight);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    // `isMenuOpen` が true の場合、高さを減少
    if (isMenuOpen) {
      interval = setInterval(() => {
        setNavCustomHeight(
          (prevHeight) => Math.max(prevHeight - 50, 0) // 最小値を ViewportHeight の半分に制限
        );
      }, 16); // 約60FPSで動作
    } else {
      // `isMenuOpen` が false の場合、高さを増加
      interval = setInterval(() => {
        setNavCustomHeight(
          (prevHeight) => Math.min(prevHeight + 50, ViewportHeight) // 最大値を ViewportHeight に制限
        );
      }, 16);
    }

    return () => clearInterval(interval); // クリーンアップ
  }, [isMenuOpen, ViewportHeight]);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="font-minecraft bg-[rgba(38,36,35,0.95)] border-b border-[var(--mc-core-rich-black)]  p-2"
    >
      <NavbarContent
        className="flex justify-start items-center gap-4 h-full sm:mr-5"
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="items-center">
          <Link
            href={config.themeConfig.header?.logo?.href || "/"}
            aria-label="Logo"
          >
            <img
              src="/datapack/icons/icon-nobg-500x500.png"
              width={40}
              height={40}
              alt="CraftRecycle"
              className="hidden sm:!block"
            />
            <h1 className="font-extrabold text text-2xl">
              {t("project.:title")}
            </h1>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {config.themeConfig.header?.items?.nav?.map((item, index) => (
          <NavbarItem key={`NavbarItem-${item}.${index}`}>
            <TLink
              className="hover:text-[var(--mc-vanilla-green-2)]"
              target={item.target}
              href={item.href}
              i18n_text={item.i18n_text || false}
            >
              {item.label}
            </TLink>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-4" justify="end">
        {config.themeConfig.header?.items?.project?.repository === "block" && (
          <NavbarItem>
            <Link
              href={`https://github.com/${config.organizationName}/${config.projectName}`}
              target="_blank"
            >
              <button
                className="w-10 h-10 p-0 text-[var(--mc-page-default-color,var(--mc-core-rich-black))] hover:text-[var(--mc-vanilla-green-2)]"
                aria-label="GitHub project repository"
              >
                <FaGithub className="text-[21px]" />
              </button>
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarMenu
        className="flex flex-col justify-between bg-[var(--mc-core-off-black)] pb-5 mt-auto !h-[calc(100dvh-80px)] transition-all duration-300 ease-in-out"
        style={{ transform: `translateY(-${navCustomHeight}px)` }}
      >
        <section
          className="flex flex-col w-full overflow-y-auto"
          onClick={() => setIsMenuOpen(false)}
        >
          {config.themeConfig.header?.items?.nav?.map((item, index) => (
            <NavbarMenuItem key={`NavbarMenuItem-${item}.${index}`}>
              <TLink
                target={item.target}
                href={item.href}
                i18n_text={item.i18n_text || false}
                isNextuiLink
                className="text hover:text-[var(--mc-vanilla-green-2)]"
              >
                {item.label}
              </TLink>
            </NavbarMenuItem>
          ))}
        </section>
      </NavbarMenu>
    </Navbar>
  );
}

export default Header;
