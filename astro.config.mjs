// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
    site: 'http://localhost',
    integrations: [mdx(), sitemap(), alpinejs()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Cormorant',
            cssVariable: '--font-cormorant',
            fallbacks: ['serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/Cormorant-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/Cormorant-Italic.ttf'],
                        weight: 400,
                        style: 'italic',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Amarante',
            cssVariable: '--font-amarante',
            fallbacks: ['cursive'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/Amarante-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});