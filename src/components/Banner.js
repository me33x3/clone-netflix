import React from 'react'

const Banner = ({ movie }) => {
  const bannerBaseURL = process.env.REACT_APP_IMG_1920_800;

  return (
    <div
      className='banner'
      style={{backgroundImage: "url(" + bannerBaseURL + movie.backdrop_path + ")"}}>
        
      <div className='banner-info'>
        <p className='title'>{ movie.title }</p>
        <span className='overview'>{ movie.overview }</span>
      </div>
    </div>
  )
}

export default Banner