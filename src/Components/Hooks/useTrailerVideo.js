import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../Utils/moviesSlice";
import { API_OPTIONS } from "../../Utils/constants";

const useTrailerVideo = (videoId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  useEffect(() => {
    !trailerVideo && getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    const filterData = jsonData?.results?.filter((e) => e.type === "Trailer");
    const TrailerVideo = filterData ? filterData[0] : jsonData?.results[0];
    dispatch(addTrailerVideo(TrailerVideo));
  };
};

export default useTrailerVideo;
