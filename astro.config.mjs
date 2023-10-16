import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://www.0xy.dev/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://0xy.dev/sitemap-index.xml",
        "https://0xy.dev/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
  ],
  output: "server",
  adapter: netlify(),
});
