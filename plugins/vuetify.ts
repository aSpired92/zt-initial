// import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

// noinspection JSUnusedGlobalSymbols
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        secondary: colors.lightBlue.darken1, // #FFCDD2
                    }
                },
                dark: {
                    colors: {
                        secondary: colors.deepOrange.base, // #FFCDD2
                    }
                },
            },
        },
    })
    app.vueApp.use(vuetify)
})