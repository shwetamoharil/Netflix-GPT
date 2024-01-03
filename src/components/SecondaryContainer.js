import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const {nowPlayingMovies, popularMovies} = useSelector(
    (store) => store?.movies
  );
  
  return (
    nowPlayingMovies && (
      <div className="bg-black ">
        <div className="-mt-52 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={popularMovies} />
          <MovieList title={"Thriller"} movies={nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
