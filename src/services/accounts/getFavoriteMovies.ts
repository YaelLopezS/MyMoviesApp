import api from "../api";

export const getFavoriteMovies = async (guestSessionId: string, page: number = 1) => {
  const { data } = await api.get(`/account/${guestSessionId}/favorite/movies`, {
    params: {
      language: "en-US",
      page,
      sort_by: "created_at.asc",
    },
  });
  return data.results;
};