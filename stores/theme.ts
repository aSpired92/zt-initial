import {useTheme} from "vuetify";

export const useThemeStore = defineStore('theme', () => {

    const theme = useTheme()


    const switchTheme = () => {
        theme.global.name.value = isDark() ? 'light' : 'dark'
    }

    const setTheme = (themeName: string) => {
        theme.global.name.value = themeName
    }

    const getTheme = () => {
        return theme.global.name.value
    }

    const isDark = () => {
        return theme.global.current.value.dark
    }

    const getSurfaceColor = () => {
        return theme.global.current.value.colors.surface
    }
    const getBackgroundColor = () => {
        return theme.global.current.value.colors.background
    }

    return { getTheme, switchTheme, setTheme, isDark, getSurfaceColor, getBackgroundColor }
})