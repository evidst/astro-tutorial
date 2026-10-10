// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://jolly-dragon-7d0102.netlify.app",
  integrations: [preact()]
});