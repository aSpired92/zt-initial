<template>
  <button
      class="menu-item"
      :class="{ 'is-active': isActive ? isActive(): null }"
      @click="action"
      :title="title"
  >
    <svg class="remix">
      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

const themeStore = useThemeStore()

const iconsFilter = computed(() => {
  return themeStore.isDark() ? 'invert(0%)' : 'invert(100%)'
})

const hoverColor = computed(() => {
  return themeStore.isDark() ? themeStore.getBackgroundColor() : 'rgba(0, 0, 0, 0.05)'
})

defineProps<{
  icon: string | undefined

  title: string | undefined

  action: (() => any) | undefined

  isActive: (() => any) | undefined
}>()
</script>

<style scoped lang="scss">
.menu-item {
  background: transparent;
  border: none;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  height: 1.75rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  width: 1.75rem;

  svg {
    fill: currentColor;
    height: 100%;
    width: 100%;
    filter: v-bind(iconsFilter);
  }

  &.is-active,
  &:hover {
    background-color: v-bind(hoverColor);
  }
}
</style>