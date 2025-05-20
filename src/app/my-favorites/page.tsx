"use client";

import { useEffect, useState } from "react";
import { useGuestSession } from "@/providers/GuestSessionContext";
import { getFavoriteMovies } from "@/services/accounts/getFavoriteMovies";
import MovieList from "@/components/MovieList/MovieList";
import { useSearchParams, useRouter } from "next/navigation";

export default function MyFavoritesPage() {
  const { guestSessionId } = useGuestSession();
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    if (!guestSessionId) return;

    setLoading(true);
    getFavoriteMovies(guestSessionId, page)
      .then((data) => {
        setMovies(data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [guestSessionId, page]);

  const goToPage = (newPage: number) => {
    router.push(`/my-favorites?page=${newPage}`);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">My Favorite Movies</h3>

      {loading && <h5 className="text-lg text-gray-500">Loading favorites...</h5>}

      {!loading && movies.length === 0 && (
        <div className="text-center mt-10 text-gray-600">
          <p className="text-xl">You don't have any favorite movies yet.</p>
          <p className="text-sm mt-2">
            Go to a movie's detail page and click <code>Add to Favorites</code> to see it here.
          </p>
        </div>
      )}

      {!loading && movies.length > 0 && (
        <>
          <MovieList movies={movies} />
          <div className="flex justify-center mt-6 gap-4">
            <button
              disabled={page === 1}
              onClick={() => goToPage(page - 1)}
              className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() => goToPage(page + 1)}
              className="bg-gray-200 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
