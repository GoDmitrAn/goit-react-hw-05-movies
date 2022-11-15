import { useEffect } from 'react';
import { useState } from 'react';
// import { fetchTrendFilms } from './Axios';
import axios from 'axios';
import { MovieGallery, MovieGalleryItem } from './TrendMovies.styled';
const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/week';
const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchTrendFilms() {
      try {
        const response = await axios(TREND_FILMS_URL, {
          signal: controller.signal,
          params: {
            api_key: process.env.REACT_APP_API_KEY,
          },
        });
        // console.log(response.data.results);
        setTrendMovies(response.data.results);
        setError(null);
      } catch (error) {
        console.log(error);
        setError('Sorry, please reload');
      }
    }
    fetchTrendFilms();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      {(trendMovies.length > 0 && (
        <MovieGallery>
          {trendMovies.map(movie => {
            return (
              <MovieGalleryItem to={`movies/${movie.id}`} key={movie.id}>
                <img
                  src={BASE_IMAGE_URL + movie.poster_path}
                  alt={movie.title}
                  loading="lazy"
                />
                <h2>{movie.title}</h2>
              </MovieGalleryItem>
            );
          })}
        </MovieGallery>
      )) ||
        (error && <div>{error}</div>)}
    </div>
  );
};
export { BASE_IMAGE_URL };
