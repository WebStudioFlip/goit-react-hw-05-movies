import { Link } from 'react-router-dom';
import blank_image from '../..img/blank.jpg';
import PropTypes from 'prop-types';
import styles from './cartMovies.module.css';

const MovieCard = ({ movie, location }) => {
  return (
    <li key={movie.id} className={styles.movie}>
      <Link
        state={{ from: location }}
        className={styles.link}
        to={`/movies/${movie.id}`}
      >
        {movie.poster_path ? (
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img className={styles.image} src={no_image} alt={movie.title} />
        )}
      </Link>
      <p className={styles.title}>{movie.title}</p>
    </li>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  location: PropTypes.object.isRequired,
};
