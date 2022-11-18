import axios from 'axios';

import { Link, useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToBack } from 'components/MovieInfo/MovieInfo.styled';

export const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
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
  return (
    <main>
      <ToBack to={backLinkHref}>Go Back</ToBack>
      {movie && <MovieInfo movie={movie} />}
    </main>
  );
};
