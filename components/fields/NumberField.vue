<script setup lang="ts">
const model = defineModel()

defineProps<{
  label: string
  placeholder?: string
  rules?: Array<any>
  min?: string
  max?: string
  step?: string
}>()


</script>

<template>
  <v-text-field
      v-model="model"
      type="number"
      variant="outlined"
      :label="label"
      :placeholder="placeholder"
      :rules="rules"
      :min="min"
      :max="max"
      :step="step"
      color="secondary"
  ></v-text-field>
</template>

<style scoped>

</style>