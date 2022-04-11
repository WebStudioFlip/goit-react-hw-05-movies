import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getFavoriteMovies } from '../../services/themoviedbAPI';
import PropTypes from 'prop-types';
import MoviesList from '../MoviesList';
import Loader from '../Loader'

import styles from './moviesList.module.css';

const MoviesTrending = () => {
    const [data, setData] = useState({
        movies: [],
        loading: false,
        error: null,
      });
    
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
      }, []);      
    
      return (
        <MoviesList data = {data} location = {location}/>
      );
}

export default MoviesTrending;

