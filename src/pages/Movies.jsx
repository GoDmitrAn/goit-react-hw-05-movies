import axios from 'axios';
import { SearchBox } from 'components/SearchBox.jsx/SearchBox';
import { BASE_IMAGE_URL } from 'components/TrendMovies/TrendMovies';
import {
  MovieGallery,
  MovieGalleryItem,
} from 'components/TrendMovies/TrendMovies.styled';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const userSearch = searchParams.get('usersearch') ?? '';
  const [userSearchList, setUserSearchList] = useState([]);
  const location = useLocation();
  const handleSubmit = data => {
    setSearchParams({ usersearch: data });
  };
  useEffect(() => {
    if (userSearch === '') {
      setUserSearchList([]);
      return;
    }
    const controller = new AbortController();
    async function fetchMoviesList() {
      try {
        const responce = await axios(
          'https://api.themoviedb.org/3/search/movie',
          {
            signal: controller.signal,
            params: {
              api_key: process.env.REACT_APP_API_KEY,
              query: userSearch,
            },
          }
        );
        setUserSearchList(responce.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMoviesList();
    return () => {
      controller.abort();
    };
  }, [userSearch]);
  return (
    <main>
      <SearchBox userHandleSubmit={handleSubmit} />
      {userSearchList.length > 0 && (
        <MovieGallery>
          {userSearchList.map(movie => {
            return (
              <MovieGalleryItem
                to={`${movie.id}`}
                key={movie.id}
                state={{ from: location }}
              >
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
      )}
    </main>
  );
};
