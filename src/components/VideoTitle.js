import InfoIcon from "../Icons/InfoIcon";
import PlayCircle from "../Icons/PlayCircle";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black text-white">
      <h1 className="font-bold text-4xl mb-1">{title}</h1>
      <p className=" w-1/4 mt-1">{overview}</p>
      <div className="py-4">
        <button className="px-12 bg-white text-white py-3 inline-flex items-center mr-2 rounded-md hover:bg-opacity-80">
          <span className="mx-2 ">
            <PlayCircle height={"24"} width={"24"} fill={"#000000"} />
          </span>
          <span className="text-black font-semibold">Play</span>
        </button>
        <button className="px-12 bg-gray-800 text-white py-3 inline-flex items-center mr-2 rounded-md">
          <span className="mx-2">
            <InfoIcon height={"24"} width={"24"} fill={"#FFFFFF"} />
          </span>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
