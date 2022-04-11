import PropTypes from 'prop-types';
import MovieCard from '../MovieCard';
import Loader from '../Loader'

import styles from './moviesList.module.css';

const MoviesList = ({data, location, title='Trending this week'}) => {
      
      const { movies, loading } = data;
    
      const trendingMovies = movies.map(movie => (         
        <MovieCard movie={movie} location={location} key={movie.id} />
      ));
    
      return (
        <div className={styles.section}>
          <h1 className={styles.title}>{title}</h1>
          <ul className={styles.moviesList}>{trendingMovies}</ul>
          {loading && <Loader />}
        </div>
      );
}

export default MoviesList;

MoviesList.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        movie: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
    location: PropTypes.object.isRequired,
    title: PropTypes.string,
  };