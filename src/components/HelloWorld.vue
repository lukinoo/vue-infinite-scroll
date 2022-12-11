<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>count: {{ count }}</h1>
  <button type="button" @click="count += 1">count is</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
