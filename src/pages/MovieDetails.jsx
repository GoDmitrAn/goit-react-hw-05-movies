import axios from 'axios';

import { useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo';
import { useState } from 'react';
import { useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getMovieById(id) {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            signal: controller.signal,
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setMovie(response.data);
      } catch (error) {}
    }
    getMovieById(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return <main>{movie && <MovieInfo movie={movie} />}</main>;
};
