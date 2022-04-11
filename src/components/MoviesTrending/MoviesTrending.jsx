import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getFavoriteMovies } from '../../api/themoviedbAPI';
import MoviesList from '../MoviesList';
console.log("render Trend")
const MoviesTrending = () => {
    const [data, setData] = useState({
        movies: [],
        loading: false,
        error: null,
      });
      const firstRenderRef = useRef(false);
      const location = useLocation();
    
      useEffect(() => {        
        const fetchPosts = async () => {
          try {
            const { results } = await getFavoriteMovies();
            setData(prevState => {
              return {
                movies: [...prevState.movies, ...results],
                loading: false,
                error: null,
              };
            });
          } catch (error) {
            setData(prevState => {
              return {
                ...prevState,
                loading: false,
                error: error.message,
              };
            });
          }
        };
        fetchPosts();
        firstRenderRef.current = true;
      }, []);   
   
   if (firstRenderRef.current) {
    return (       
      <MoviesList data = {data} location = {location}/>
    );
   } else {
     return(<div>Wait</div>)
   }
      
}

export default MoviesTrending;

