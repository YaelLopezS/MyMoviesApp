import React from "react";
import Link from "next/link";
import MovieCard from "../MovieCard/MovieCard";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date?: string;
  overview: string;
};

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          href={{
            pathname: `/movie/${movie.id}`,
            query: { from: "list" },
          }}
          className="cursor-pointer"
        >
          <MovieCard
            title={movie.title}
            voteAverage={movie.vote_average}
            posterPath={movie.poster_path}
            releaseYear={parseInt(movie.release_date?.substring(0, 4) || "0")}
            description={movie.overview}
          />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
