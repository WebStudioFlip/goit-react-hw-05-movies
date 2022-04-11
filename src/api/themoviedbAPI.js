import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '9f2bc6dc8b2f46ed6de79a15158912b2',
  },
});

export const getFavoriteMovies = async page => {
  const { data } = await instance.get(`/trending/movie/week`);
  return data;
};

export const searchMoviesKey = async ({page = 1, query}) => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getDetailsMovies = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}`);
  return data;
};

export const getMoviesCredits = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieReview = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews`);
  return data;
};