import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  image: {
    service: squooshImageService(),
  },
});