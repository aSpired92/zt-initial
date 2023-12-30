<script setup lang="ts">
</script>

<template>

  <div>
    <PageHeader title="Asortyment" description="Modyfikacja asortymentu oraz produktów">
      <template #actions>
        <v-btn text="Dodaj produkt" color="secondary" @click="navigateTo('assortment/add')">
          <template v-slot:prepend>
            <v-icon icon="mdi-plus" />
          </template>
        </v-btn>
      </template>
    </PageHeader>
    <PageSection>

      lista produktów
    </PageSection>
  </div>
</template>
