import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../../Utils/constants";
import { addPopularMovies } from "../../Utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () =>{
    const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2',
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results[0]);
    dispatch(addPopularMovies(json.results))
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;