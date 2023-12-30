<script setup lang="ts">

import type {ProductType} from "~/ts/interfaces";
import {apiFetch} from "~/composables/api.fetch";
import {deleteProductType, getProductTypes} from "~/ts/api/product-type";

defineProps<{
  items: ProductType[]
  label: string
  placeholder?: string
  rules?: Array<any>
}>()


const model = defineModel()

const emit = defineEmits(['update:modelValue', 'delete', 'add'])

const updateValue = (value: ProductType) => {
  emit('update:modelValue', value)
}



</script>

<template>
  <v-select
      v-model="model"
      :rules="rules"
      :items="items"
      variant="outlined"
      :label="label"
      :placeholder="placeholder"
      item-title="name"
      color="secondary"
  >
    <template #item="{ props, item }">
      <!-- Dodaj przycisk do każdej opcji -->
      <v-btn class="w-100" style="height: 50px" :text="item.title" flat rounded="0" @click="updateValue(item.value)">
        <template #prepend>
          <div class="position-absolute left-0">
            <v-tooltip text="Usuń kategorię" location="bottom">
              <template v-slot:activator="{ props }">
            <v-btn icon="mdi-delete" flat color="transparent" v-bind="props" @click="emit('delete', item.value)" />
              </template>
            </v-tooltip>
          </div>

        </template>
      </v-btn>
    </template>
    <template #append>
      <v-tooltip text="Dodaj kategorię">
        <template v-slot:activator="{ props }">
          <v-btn color="secondary" @click="emit('add')" icon="mdi-plus" v-bind="props" />
        </template>
      </v-tooltip>
    </template>
  </v-select>
</template>

<style scoped>

</style>