import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action, movieAction } from '../redux/actions';
import ClipLoader from 'react-spinners/ClipLoader';
import Banner from '../components/Banner';

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovies, topRatedMovies, upComingMovies } = useSelector((state) => state.movie);
  const { loading } = useSelector((state) => state.base);
  const ranIdx = Math.floor(Math.random() * 20);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className='spinner'>
        <ClipLoader color='red' loading={ loading } size={ 100 } />
      </div>
    );
  }

  return (
    <div>
      <Banner movie={ popularMovies[ranIdx] } />
    </div>
  );
}

export default Home;