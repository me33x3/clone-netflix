import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction'
import Banner from '../components/Banner'

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );

  let ranIdx = Math.floor(Math.random() * 20);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      { popularMovies && <Banner movie={ popularMovies[ranIdx] } /> }
    </div>
  );
}

export default Home;