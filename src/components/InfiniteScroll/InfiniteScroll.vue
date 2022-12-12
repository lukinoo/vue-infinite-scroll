<script setup lang="ts">
import { TCards } from "../../types";
import Card from "../Card/Card.vue";
import Loading from "../Loading/Loading.vue";

interface Props {
  cards: Array<TCards> | null;
  loading: boolean;
}

defineProps<Props>();
</script>
<template>
  <div class="container">
    <Card v-for="(card, index) in cards" :key="index" :card="card" />
  </div>
  <Loading v-if="loading" />
</template>
<style scoped lang="less">
@primaryBlack: #000;

.container {
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 3rem;
  place-items: center;
  grid-gap: 2rem;
}
</style>
