import { movieActions } from "../reducers/movieReducer";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`);

    const topRatedMovieApi = api.get(
      `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`);

    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`);

    let [ popularMovies, topRatedMovies, upComingMovies ] = await Promise.all([
      popularMovieApi,
      topRatedMovieApi,
      upComingMovieApi
    ]);

    dispatch(movieActions.getMovies({
      popularMovies: popularMovies.data.results,
      topRatedMovies: topRatedMovies.data.results,
      upComingMovies: upComingMovies.data.results
    }))
  };
}

export const movieAction = {
  getMovies
};