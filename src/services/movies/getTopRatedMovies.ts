import api from "../api";

export const getTopRatedMovies = async (page: number = 1) => {
  const response = await api.get("/movie/top_rated", {
    params: { page },
  });
  return response.data.results;
};
