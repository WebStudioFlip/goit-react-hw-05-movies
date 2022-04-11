import { Outlet } from 'react-router-dom';
import MovieInfo from '../../components/MovieInfo';

const MovieDetailsPage = () => {
  return (
    <>
      < MovieInfo />
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;