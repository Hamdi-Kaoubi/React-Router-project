import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({Data, search,value}) => {
  return (
    <div id="movies" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
    {Data.filter(item =>item.name.toLowerCase().includes(search.toLowerCase().trim()) && item.rating >= value).map(el =><MovieCard key={Math.random()} el={el}/>)};
    
    </div>
  )
}

export default MovieList