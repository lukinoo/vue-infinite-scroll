import { reactive, toRefs } from "vue";

interface TMovies<T> {
  isLoading: boolean;
  data: T[] | null;
}

export const useFetch = async <T>(url: string) => {
  const state = reactive<TMovies<T>>({
    isLoading: true,
    data: null,
  });

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const resp = await fetch(url);

      const { Search } = await resp.json();
      state.data = Search;

      state.isLoading = false;

      console.log(state.isLoading);
    } catch (err) {
      console.error(err);
    }
  };

  await fetchData();

  return {
    ...toRefs(state),
  };
};
