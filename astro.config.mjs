// @ts-check
import alpinejs from '@astrojs/alpinejs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, envField, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://aristocratic-arietta.neocities.org',
    integrations: [mdx(), sitemap(),
    alpinejs({
        entrypoint: '/src/alpine'
    })
    ],
    env: {
        schema: {
            LASTFM_API_KEY: envField.string({ context: 'server', access: 'secret' }),
            LASTFM_USERNAME: envField.string({ context: 'server', access: 'secret' }),
        }
    },
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
        {
            provider: fontProviders.local(),
            name: 'Source Code Pro',
            cssVariable: '--font-sourcecodepro',
            fallbacks: ['monospace'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/SourceCodePro-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Roboto',
            cssVariable: '--font-roboto',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/Roboto-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/Roboto-Italic.ttf'],
                        weight: 400,
                        style: 'italic',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Againts',
            cssVariable: '--font-againts',
            fallbacks: ['cursive'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/Againts-Regular.otf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Monsieur La Doulaise',
            cssVariable: '--font-monsieurladoulaise',
            fallbacks: ['cursive'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/MonsieurLaDoulaise-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Petit Formal Script',
            cssVariable: '--font-petitformalscript',
            fallbacks: ['cursive'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/PetitFormalScript-Regular.ttf'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
    output: 'static'
});