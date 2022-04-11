import { useEffect, useState } from 'react';
import { getDetailsMovies } from '../../services/themoviedbAPI';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Loader';
import blank_image from '../../img/blank.jpg';
import styles from './movieInfo.module.css';

const MovieInfo = () => {
  const [state, setState] = useState({
    movie: {},
    loading: false,
    error: null,
  });

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onGoBack = () => {
    navigate(location?.state?.from || '/');
  };

  const genres = Array.isArray(state.movie.genres)
    ? state.movie?.genres.map(({name}) => name).join(', ')
    : '';

  useEffect(() => {
    const fetchInfo = async () => {
        setState(prevState => ({
            ...prevState,            
            loading: true,
          }));
      try {
        const data = await getDetailsMovies(movieId);
        setState(prevState => ({
          ...prevState,
          movie: data,
          loading: false,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };

    fetchInfo();
  }, [movieId]);

  const { movie, loading, error } = state;

  return (
    <>
      <div className={styles.buttonWrapper}>
        {loading && <Loader />}
        <button className={styles.button} onClick={onGoBack} type="button">
          &#8656;&ensp; Go back
        </button>
      </div>
      {movie && (
        <div className={styles.movies}>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : blank_image
            }
            alt={movie.title}
          />
          <div className={styles.movieInfo}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.text}>Vote: {movie.vote_average}</p>
            <p className={styles.text}>Popularity: {movie.popularity}</p>
            <p className={styles.text}>Genres: {genres}</p>
            <h2 className={styles.title}>Overview</h2>
            <p className={styles.text}>{movie.overview}</p>
          </div>
        </div>
      )}

      <div className={styles.navigation}>
        <h3 className={styles.information}>Additional information</h3>

        <ul className={styles.menu}>
          <li>
            <Link className={styles.link} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link className={styles.link} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieInfo;