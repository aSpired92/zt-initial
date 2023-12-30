<script setup lang="ts">
const themeStore = useThemeStore()

const elevation = computed(() => {
  return themeStore.isDark() ? '3' : '0'
})

const bordered = computed(() => {
  return !themeStore.isDark()
})
</script>

<template>
<v-sheet :elevation="elevation" :border="bordered" class="pa-4 my-4" rounded>
  <slot />
</v-sheet>
</template>

<style scoped>

</style>