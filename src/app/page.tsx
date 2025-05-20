'use client';

import { useEffect, useState } from "react";
import { getPopularMovies } from "@/services/movies/getPopularMovies";
import { getTopRatedMovies } from "@/services/movies/getTopRatedMovies";
import { getNowPlayingMovies } from "@/services/movies/getNowPlayingMovies";
import MovieList from "@/components/MovieList/MovieList";

export default function HomePage() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      setPopular(await getPopularMovies(1));
      setTopRated(await getTopRatedMovies(1));
      setNowPlaying(await getNowPlayingMovies(1));
    };
    fetchAll();
  }, []);

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
        <MovieList movies={nowPlaying} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Popular</h2>
        <MovieList movies={popular} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
        <MovieList movies={topRated} />
      </section>
    </div>
  );
}
