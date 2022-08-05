import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { action, movieAction } from '../redux/actions';
import { Container, Row, Col} from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader';
import { Banner, RankCard } from '../components';

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

      <Container>
        <Row>
          {popularMovies.slice(0, 6).map((movie, idx) => (
            <Col xl={ 2 } md={ 4 } sm={ 12 } key={ idx }>
              <RankCard movie={ movie } rank={ idx + 1 } key={ idx } />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Home;