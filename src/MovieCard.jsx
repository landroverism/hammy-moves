import React from 'react'

const MovieCard = ({movie}) => {
  return (
<div className='movie'> 

    <div>
    <p>{movie.Year}</p>
    </div>
  
    <div>
      <img src={ movie.Poster !== 'https://via.placeholder.com/400' ? movie.Poster : 'N/A'}    alt={movie.Title} />
    </div>

  </div>
  )}

export default MovieCard
