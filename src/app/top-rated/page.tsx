"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getTopRatedMovies } from "@/services/movies/getTopRatedMovies";
import MovieList from "@/components/MovieList/MovieList";

export default function TopRatedPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const data = await getTopRatedMovies(page);
      setMovies(data || []);
      setLoading(false);
    };
    fetchMovies();
  }, [page]);

  const goToPage = (newPage: number) => {
    router.push(`/top-rated?page=${newPage}`);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6">Top Rated Movies</h3>
      {loading ? <p>Loading...</p> : <MovieList movies={movies} />}

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
    </div>
  );
}
