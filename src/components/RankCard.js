import React from 'react'

const RankCard = ({ movie, rank }) => {
  const cardBaseURL = process.env.REACT_APP_IMG_440_660;

  return (
    <div className='rank-card'>
      <div className='rank-num'>{ rank }</div>
      <img
        className='rank-img'
        src={ cardBaseURL + movie.poster_path } />
    </div>
  )
}

export default RankCard