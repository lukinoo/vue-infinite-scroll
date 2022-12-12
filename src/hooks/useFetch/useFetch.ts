import { reactive, ref, toRefs } from "vue";

interface TMovies<T> {
  isLoading: boolean;
  data: T[] | null;
}

export const useFetch = async <T>(url: string) => {
  const state = reactive<TMovies<T>>({
    isLoading: true,
    data: null,
  });
  const offset = ref<number>(1);

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const resp = await fetch(url + "&page=" + offset);

      const { Search } = await resp.json();
      state.data = Search;

      state.isLoading = false;
    } catch (err) {
      console.error(err);
    }

    offset.value += 1;
  };

  await fetchData();

  return {
    ...toRefs(state),
  };
};
