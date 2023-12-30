<script setup lang="ts">
import {useThemeStore} from "~/stores/theme";

const themeStore = useThemeStore()

const themeIcon = computed(() => {
  return themeStore.isDark() ? 'mdi-lightbulb-outline' : 'mdi-lightbulb-on'
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="GeetarHere-O Admin">
      <template v-slot:append>
        <v-btn :icon="themeIcon" rounded @click="themeStore.switchTheme"/>
      </template>
    </v-app-bar>

    <v-navigation-drawer
        expand-on-hover
        rail
    >
      <v-list>
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Jan Kowalski"
            subtitle="jankowalski@comcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-chart-bar" title="Statystyki" value="statistics" @click="navigateTo('/statistics')" disabled/>
        <v-list-item prepend-icon="mdi-order-bool-ascending-variant" title="Zamówienia" value="orders" @click="navigateTo('/orders')" disabled />
        <v-list-item prepend-icon="mdi-archive" title="Asortyment" value="assortment" @click="navigateTo('/assortment')" />
        <v-list-item prepend-icon="mdi-email" title="Wiadomości" value="messages" @click="navigateTo('/messages')" disabled />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-start justify-center" style="min-height: 300px;">
      <slot />
    </v-main>
  </v-layout>
</template>

<style scoped></style>