import { useSelector } from "react-redux";
import useTrailerVideo from "./Hooks/useTrailerVideo";

const VideoBackground = ({videoId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideo(videoId);

  return (
    <div className=" w-screen overflow-hidden">
      <iframe
        className=" w-screen h-full transform scale-150 z-0 aspect-video mt-[-20px]"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+"?autoplay=1&mute=1"}
        title="Youtube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
