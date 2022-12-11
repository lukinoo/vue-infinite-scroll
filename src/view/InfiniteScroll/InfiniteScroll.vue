<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>
<template>
  <h1>{{ count }}</h1>
  <button @click="count += 1">count</button>
  <button @click="count -= 1">count</button>
</template>
<style scoped lang="less">
@primaryBlack: #000;
</style>
