import api from "../api";
import { movieActions } from "../reducers/movieReducer";

const API_KEY = process.env.REACT_APP_API_KEY

function getTrending() {
  return async (dispatch) => {
    const trendingApi = await api.get(`/trending/all/day?api_key=${API_KEY}`);

    dispatch(movieActions.getTrending({
      trending: trendingApi.data.results
    }));
  };
}

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
    }));
  };
}

export const movieAction = {
  getTrending,
  getMovies
};