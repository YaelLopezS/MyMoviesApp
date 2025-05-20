import api from "../api";

export const getMovieById = async (id: string) => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};
