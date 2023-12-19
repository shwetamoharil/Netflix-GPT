import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store?.movies?.nowPlayingMovies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
