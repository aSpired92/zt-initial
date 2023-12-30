import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'


// noinspection JSUnusedGlobalSymbols
export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiBase: 'https://127.0.0.1:7282/'
        }
    },
    typescript: {
        typeCheck: true
    },
    css: [
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.css',
    ],
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

    components: [
        {
            path: '~/components', // will get any components nested in let's say /components/test too
            pathPrefix: false,
        },
    ]
})
