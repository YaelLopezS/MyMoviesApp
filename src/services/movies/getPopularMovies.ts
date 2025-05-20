import api from "../api";

export const getPopularMovies = async (page: number = 1) => {
  const response = await api.get("/movie/popular", {
    params: { page },
  });
  return response.data.results;
};