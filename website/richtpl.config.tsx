import Config from "@/types/richtpl.config";

/**
 * Site configuration object.
 * Contains general site information, i18n settings, and theme configuration.
 */
const config: Config = {
  // Tagline for the site
  tagline: "Support Scripts",

  // URL to the favicon
  favicon: "/datapack/icons/favicon.ico",

  // Production URL of the site
  url: "https://support-scripts.fun117.dev",

  // Base URL pathname (for GitHub Pages deployment)
  baseUrl: "/",

  // GitHub deployment configuration
  organizationName: "toakiryu", // GitHub organization/user name
  projectName: "support-scripts", // GitHub repository name

  // Internationalization (i18n) configuration
  i18n: {
    // Default locale for the site
    defaultLocale: "ja",
    // List of supported locales
    locales: ["ja", "en"],
    // Locale-specific configurations
    localeConfigs: {
      ja: {
        label: "日本語", // Label for the Japanese locale
        htmlLang: "ja-JP", // HTML language attribute for Japanese
        path: "ja", // Path prefix for Japanese locale
      },
      en: {
        label: "English", // Label for the English locale
        htmlLang: "en-US", // HTML language attribute for English
        path: "en", // Path prefix for English locale
      },
    },
    selectButton: true, // Option to include a locale selection button
  },

  // Theme and layout configuration
  themeConfig: {
    // Color mode settings
    colorMode: {
      defaultMode: "dark", // Default color mode (light, dark, or system)
      selectSwitch: false, // Whether to allow switching color modes
    },
    // URL to the social card image (replace with your project's image)
    image: "/image/minecraft-java.jpeg",
    // Metadata for the site
    metadata: {
      keywords: [
        "minecraft",
        "datapack",
        "minecraft-java",
        "vercel-hosting",
        "nextjs",
        "fun117",
      ],
      authors: { name: "toakiryu", url: "https://fun117.dev" },
      creator: "toakiryu",
      icons: {
        icon: "/datapack/icons/favicon.ico",
        apple: "/datapack/icons/favicon.png",
      },
      generator: "Next.js",
      publisher: "Vercel",
      robots: "follow, index",
      metadataBase: new URL("https://support-scripts.fun117.dev"),
    },
    // Header configuration
    header: {
      // Title for the header
      title: "support-scripts",
      // Navigation items in the header
      items: {
        // Items on the left side of the header
        nav: [
          {
            label: "project.nav.items.description", // Label for the item
            href: "/", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
          {
            label: "project.nav.items.files", // Label for the item
            href: "/files", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
          {
            label: "project.nav.items.images", // Label for the item
            href: "/images", // Internal URL path
            i18n_text: true, // Whether to include locale prefix in the Text
          },
        ],
        project: {
          repository: "block", // Display the repository link in the header
        },
      },
    },
    // Footer configuration
    footer: {
      // Title for the footer
      title: "support-scripts",
      // Logo configuration
      // Social links configuration
      social: {
        github: true, // Whether to include a GitHub link
        twitter: "Fun_117", // Twitter handle
      },
      footerText: {
        i18n: true, // Whether the footer text should be localized
      },
      // Footer navigation items
      items: [
        {
          title: "About developer",
          title_i18n: true,
          contents: [
            {
              label: "owner",
              href: "https://github.com/Fun117",
              target: "_blank",
              i18n_text: true,
            },
            {
              label: "contributors",
              href: "https://github.com/Fun117/support-scripts/graphs/contributors",
              target: "_blank",
              i18n_text: true,
            },
          ],
        },
        {
          title: "Minecraft Wiki",
          contents: [
            {
              label: "Website",
              href: "https://minecraft.wiki",
              target: "_blank",
            },
            {
              label: "Trading",
              href: "https://minecraft.wiki/w/Trading",
              target: "_blank",
            },
            {
              label: "Tutorials",
              href: "https://minecraft.wiki/w/Tutorials",
              target: "_blank",
            },
            {
              label: "Data Pack",
              href: "https://minecraft.wiki/w/Data_pack",
              target: "_blank",
            },
            {
              label: "Resource Pack",
              href: "https://minecraft.wiki/w/Resource_pack",
              target: "_blank",
            },
            {
              label: "Pack Format",
              href: "https://minecraft.wiki/w/Pack_format",
              target: "_blank",
            },
          ],
        },
        {
          title: "links",
          title_i18n: true,
          contents: [
            {
              label: "Minecraft",
              href: "https://www.minecraft.net/en-us",
              target: "_blank",
            },
            {
              label: "Minecraft Community",
              href: "https://www.minecraft.net/en-us/community",
              target: "_blank",
            },
            {
              label: "Tips for Beginners",
              href: "https://www.minecraft.net/en-us/minecraft-tips-for-beginners",
              target: "_blank",
            },
            {
              label: "Help",
              href: "https://help.minecraft.net/hc/en-us",
              target: "_blank",
            },
            {
              label: "Minecraft Creator Tutorials",
              href: "https://www.minecraft.net/en-us/creator",
              target: "_blank",
            },
          ],
        },
      ],
    },
    // Sitemap Configuration
    sitemap: {
      excludedDirs: [
        "error", // Directory for error pages
        "not-found", // Directory for 404 pages
        "[...rest]", // Directory for [...rest] pages
      ],
    },
  },
};

export default config;
