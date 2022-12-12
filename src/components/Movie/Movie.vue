<script setup lang="ts">
import { TMovies } from "../../types";

interface Props {
  movie: TMovies;
}

defineProps<Props>();
</script>
<template>
  <img
    class="movie-poster__image"
    v-if="movie.Poster !== undefined"
    :src="movie.Poster"
    :alt="movie.Title"
  />
</template>
<style scoped>
.movie-poster__image {
  max-width: 300px;
  width: 100%;
  height: 100%;
}
</style>
