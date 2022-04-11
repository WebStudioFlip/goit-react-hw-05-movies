import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../../services/themoviedbAPI';
import blank_avatar from '../../img/blank.jpg';

import styles from './cast.module.css';

const Cast = () => {
  const [data, setData] = useState({
    actors: [],
    loading: false,
    error: null,
  });

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCast = async () => {
      setData(prevState => ({ ...prevState, loading: true }));
      try {
        const { cast } = await getMoviesCredits(movieId);
        setData(prevState => ({
          ...prevState,
          actors: cast,
          loading: false,
        }));
      } catch (error) {
        setData(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovieCast();
  }, [movieId]);

  const castList = data.actors.map(actor => (
    <li className={styles.castItem} key={actor.id}>
      <img
        className={styles.castImg}
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : defAvatar
        }
        alt={actor.original_name}
      />
      <h4 className={styles.name}>{actor.original_name}</h4>
      <p className={styles.character}>{actor.character}</p>
    </li>
  ));

  return (
    <>
      <ul className={styles.cast}>{castList}</ul>
    </>
  );
};

export default Cast;