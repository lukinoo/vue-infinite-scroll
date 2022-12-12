<script setup lang="ts">
import { TMovies } from "../../types";
import MovieVue from "../Movie/Movie.vue";

interface Props {
  movies: Array<TMovies> | null;
}

defineProps<Props>();
</script>
<template>
  <MovieVue
    v-if="movies !== null"
    v-for="movie in movies"
    :key="movie.imdbID"
    :movie="movie"
  />
</template>
<style scoped lang="less">
@primaryBlack: #000;
</style>
