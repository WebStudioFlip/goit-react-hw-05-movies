import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { searchMoviesKey } from '../../api/themoviedbAPI';

import SearchBar from '../SearchBar';
import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';

const MovieSearch = () => {
  const [data, setData] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      setData(prevState => ({ ...prevState, loading: true }));
      try {
        const { results } = await searchMoviesKey({page, query});
        setData(prevState => ({
          ...prevState,
          movies: results,
          loading: false,
        }));
      } catch (err) {
        setData(prevState => ({ ...prevState, loading: false, error: err }));
      }
    };
    if (query) {
      fetchPosts();
      return;
    }
  }, [query, page]);

  const changeSearch = query => setSearchParams({ query, page: 1 });

  const { error, movies, loading } = data;

  return (
    <>
      <SearchBar onSubmit={changeSearch} />

      {query && Boolean(movies.length) && (
         <MoviesList data = {data} location = {location} title="Результаты поиска"/>
      )}

      {!movies.length && query && !loading && !error && (
        <p>По запросу {query} ничего не найдено</p>
      )}

      {loading && <Loader />}
    </>
  );
};

export default MovieSearch;