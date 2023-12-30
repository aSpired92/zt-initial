<script setup lang="ts">
import AdminContent from "~/components/PageContent.vue";
import AdminHeader from "~/components/PageHeader.vue";
</script>

<template>
  <AdminContent>
    <AdminHeader title="Wiadomości" description="Wiadomości od klientów wysłane przez formularz kontaktowy" />
    <NuxtPage />
  </AdminContent>
</template>
