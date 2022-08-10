import React from 'react'

const CarouselCard = ({ movie, cardStyle }) => {
  const cardBaseURL = process.env.REACT_APP_IMG_710_400;

  return (
    <div
      className='carousel-card'
      style={ Object.assign({
        backgroundImage: "url(" + `${ cardBaseURL + movie.backdrop_path }` + ")"
      }, cardStyle) }>

    </div>
  )
}

export default CarouselCard