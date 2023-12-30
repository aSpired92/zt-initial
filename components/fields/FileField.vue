<script setup lang="ts">

const props = defineProps<{
  label: string
  placeholder?: string
  rules?: Array<any>
  icon?: string
}>()

const model = defineModel<File[]>()

</script>

<template>
  <v-file-input v-model="model" label="Zdjęcie" :rules="rules" variant="outlined" :prepend-inner-icon="icon" prepend-icon="false" color="secondary"></v-file-input>
</template>

<style scoped>

</style>