import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="poster" src={IMG_CDN_URL + posterPath} className="rounded-md"></img>
    </div>
  );
};

export default MovieCard;
