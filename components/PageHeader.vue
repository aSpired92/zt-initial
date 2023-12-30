<script setup lang="ts">
import PageSection from "~/components/PageSection.vue";

defineProps<{
  title: string
  description?: string
  flip?: boolean
}>()
</script>

<template>
<PageSection>
  <v-row class="w-full">
    <v-col class="flex-grow-0" :order="flip ? 1 : 0">
      <div class="text-h5 text-no-wrap">{{title}}</div>
      <div v-if="description" class="text-secondary text-subtitle-1 text-no-wrap">{{description}}</div>
    </v-col>
    <v-col :class="{'d-flex': true, 'flex-wrap': true, 'flex-grow-1': true, 'align-content-end': true, 'justify-end': !flip}">
      <slot name="actions" />
    </v-col>

  </v-row>

</PageSection>
</template>

<style scoped>

</style>