import axios from 'axios';

import { useLocation, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToBack } from 'components/MovieInfo/MovieInfo.styled';

export const MovieDetails = () => {
  const location = useLocation();
  const [backHref, setBackHref] = useState('/');
  // const backLinkHref = location.state?.from ?? '/';
  // console.log(backLinkHref);
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    if (location.state) {
      setBackHref(location.state.from);
    } else setBackHref('/');
  }, []);
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
      <ToBack to={backHref}>Go Back</ToBack>
      {movie && <MovieInfo movie={movie} />}
    </main>
  );
};
