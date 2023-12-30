<script setup lang="ts">
const model = defineModel()

defineProps<{
  label: string
  placeholder?: string
  rules?: Array<any>
}>()

</script>

<template>
  <v-text-field
      v-model="model"
      clearable
      variant="outlined"
      :label="label"
      :placeholder="placeholder"
      :rules="rules"
      color="secondary"
  ></v-text-field>
</template>

<style scoped>

</style>