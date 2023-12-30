<script setup lang="ts">
import {useThemeStore} from "~/stores/theme";

const themeStore = useThemeStore()

themeStore.setTheme('dark')
</script>

<template>
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>
