<script setup lang="ts">
import { TMovies } from "../../types";
import Loading from "../Loading/Loading.vue";
import MovieVue from "../Movie/Movie.vue";

interface Props {
  movies: Array<TMovies> | null;
  loading: boolean;
}

defineProps<Props>();
</script>
<template>
  <div class="container">
    <MovieVue
      v-if="movies !== null"
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie"
    />
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
