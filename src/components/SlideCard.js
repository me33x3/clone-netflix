import React from 'react'

const cardBaseURL = process.env.REACT_APP_IMG_710_400;

const SlideCard = ({ movie }) => {
  return (
    <div>
      <img src={ cardBaseURL + movie.backdrop_path } height={ 150 } />
    </div>
  )
}

export default SlideCard