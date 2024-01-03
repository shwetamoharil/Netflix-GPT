import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  return (
    nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Trending"} movies={nowPlayingMovies} />
          <MovieList title={"Thriller"} movies={nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
