import React , { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import CarouselCard from './CarouselCard'

const Carousel = ({ title, movies }) => {
  const [focus, setFocus] = useState(0);
  const wrapperRef = useRef(null);

  const viewCnt = 6;
  const moveCnt = 3;
  const itemCnt = movies.length;
  const itemWidth = 710;                                                              // px
  const itemHeight = 400;                                                             // px
  const gap = 0.1;                                                                    // vw
  const containerWidth = 90;                                                          // vw
  const unit = containerWidth / viewCnt - (gap * 2);                                  // vw
  const containerHeight = parseInt((unit / containerWidth) * (itemHeight / itemWidth) * 100);   // vw

  const carouselStyle = {
    width: `${ containerWidth }vw`,
    paddingBottom: '30px',
    margin: "0 auto 0 auto"
  };

  const titleStyle = {
    marginBottom: "1vh",
    fontWeight: "bold",
    fontSize: "1.4vw"
  };

  const wrapperStyle = {
    display: "flex",
    width: "100%"
  };

  const cardStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    minWidth: `${ unit }vw`,
    paddingTop: `${ containerHeight }vw`,
    margin: `0 ${ gap }vw 0 ${ gap }vw`,
    borderRadius: "5px",
  };

  const btnStyle = {
    marginTop: `-${ containerHeight }vw`,
    width: `${ (100 - containerWidth) / 2 }vw`,
    height: `${ containerHeight }vw`,
    backgroundColor: "black",
    color: "white",
    opacity: "0.7",
    textAlign: "center",
    lineHeight: `${ containerHeight }vw`,
    fontSize: "1.4vw"
  };

  const prevStyle = {
    marginLeft: `-${ (100 - containerWidth) / 2 }vw`
  };
  
  const nextStyle = {
    marginLeft: "auto",
    marginRight: `-${ (100 - containerWidth) / 2 }vw`
  };

  const prev = () => {
    if (focus === 0)
      return;
    setFocus(focus - moveCnt > 0 ? focus - moveCnt : 0);
  }

  const next = () => {
    if (focus === (itemCnt - viewCnt))
      return;
    setFocus(focus + moveCnt < (itemCnt - viewCnt) ? focus + moveCnt : (itemCnt - viewCnt));
  }

  useEffect(() => {
    let move = (unit + (gap * 2)) * focus;

    wrapperRef.current.style.transition = 'all 0.5s ease-in-out';
    wrapperRef.current.style.transform = `translate(-${ move }vw)`;
  }, [focus]);

  return (
    <div style={ carouselStyle }>
      <div style={ titleStyle }>{ title }</div>
      
      <div style={ wrapperStyle } ref={ wrapperRef }>
        { movies.map((movie) => (
          <CarouselCard movie={ movie } key={ movie.id } cardStyle={ cardStyle } />
        )) }
      </div>

      { focus > 0 && 
        <div style={ Object.assign({}, btnStyle, prevStyle) } onClick={ () => prev() }>
          <FontAwesomeIcon icon={ faAngleLeft } />
        </div>
      }

      { focus < (itemCnt - viewCnt) && 
        <div style={ Object.assign({}, btnStyle, nextStyle) } onClick={ () => next() }>
          <FontAwesomeIcon icon={ faAngleRight } />
        </div>
      }
    </div>
  )
}

export default Carousel