import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Free City of Weltheas",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "weltheas.myrdin.cx",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f9f7f0", // page background (soft warm off-white)
          lightgray: "#c9ccd1", // borders, subtle lines
          gray: "#626d7d", // secondary text, graph links
          darkgray: "#1a1a1a", // main body text
          dark: "#17263e", // headers, icons, primary text accent (dark blue)
          secondary: "#17263e", // links, current graph node (dark blue)
          tertiary: "#dbbf64", // hover states, visited nodes (lighter gold)
          highlight: "rgba(23, 38, 62, 0.15)", // subtle dark-blue highlight
          textHighlight: "#c9ccd1", // markdown highlighted text
        },
        darkMode: {
          light: "#1a1a1a", // page background
          lightgray: "#2c2f38", // borders, subtle dividers
          gray: "#626d7d", // secondary text, graph links
          darkgray: "#c9ccd1", // body text
          dark: "#ffffff", // header text, icons
          secondary: "#d5af36", // links, current graph node (bright gold)
          tertiary: "#17263e", // hover states, visited nodes (lighter gold)
          highlight: "rgba(213, 175, 54, 0.15)", // subtle gold highlight
          textHighlight: "#dbc98d", // markdown highlighted text
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
