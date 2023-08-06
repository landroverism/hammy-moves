import {useEffect, useState} from 'react'
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

//758111e4



const API_URL = `http://www.omdbapi.com?apikey=758111e4`



const movie1 = 
  {
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}


const App = () => { 
  
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState(['']);
  //assync becoz going to take sometime in fetching these movies 

//searchMovies is going to accept title of what you wanna search and title of any movie we search
  const searchMovies = async (title) => {
  const response = await fetch(`${API_URL}&s=${title}`)
//Getting data from it 
const data = await response.json();

setMovies(data.Search);
}

useEffect(() => {

searchMovies('spiderman');
  }, []); 
   
  return (
    <div className='app'>
      <h1>MovieLand</h1>
 
      <div className='search'>
<input placeholder='Search for movies' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)}/>

<img src={SearchIcon}
alt="search" onClick={() =>  setMovies(searchTerm)} />
 </div>

{
  movies?.length > 0 
  ? (
    <div classname='container'>
     {movies.map((movie) => (
 <MovieCard movie={movie} />
     )) 
     
    
     }
    </div>
  ):(
    <div className='empty'> 
<h2>No more movies found</h2>
    </div>

  )

}


<div className='container'>
  <MovieCard movies1={movies[0]} />

<div className='movie'> 

<div>
<p>{movie1.Year}</p>
</div>


<div>
  <img src={ movie1.Poster !== 'https://via.placeholder.com/400' ? movie1.Poster : 'N/A'}    alt={movie1.Title} />
</div>


<div>
<span>{movie1.Type}</span>
<h3>{movie1.Title}</h3>
    </div>
</div>


</div>
    </div>

 )
}

export default App;