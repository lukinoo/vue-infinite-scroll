<script setup lang="ts">
import { TCards } from "../../types";

interface Props {
  card: TCards;
}

defineProps<Props>();
</script>
<template>
  <div class="card">
    <h2>{{ card.name }}</h2>
  </div>
</template>
<style scoped lang="less">
.displayFlex() {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card {
  width: 100%;
  height: 10rem;
  .displayFlex();
  background: #ffffff;
  padding: 1.5rem 1.8rem;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  transition: box-shadow 0.3s ease;
  h2 {
    font-size: 2rem;
    color: #35495e;
    margin-bottom: 0.5rem;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.6) 0px 8px 12px;
  }
}
</style>
