import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utils/constants";
import { addTopRatedMovies } from "../../Utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=2',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results[0]);
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;