import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utils/constants";
import { addUpcomingMovies } from "../../Utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=2',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results[0]);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
}

export default useUpcomingMovies;