import api from "../api";

export const getNowPlayingMovies = async (page: number = 1) => {
  const response = await api.get("/movie/now_playing", {
    params: { page },
  });
  return response.data.results;
};
