import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList } from './Cast.styled';
import { BASE_IMAGE_URL } from '../components/TrendMovies/TrendMovies';

export const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getCastById(id) {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            signal: controller.signal,
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setCastList(response.data.cast);
      } catch (error) {}
    }
    getCastById(movieId);
    return () => {
      controller.abort();
    };
  }, [movieId]);
  return (
    <section>
      <h3>Cast</h3>
      {castList && (
        <CastList>
          {castList.map(item => {
            return (
              <li key={item.id}>
                <p>{item.character}</p>
                <img
                  src={BASE_IMAGE_URL + item.profile_path}
                  alt={item.character}
                  loading="lazy"
                />
                <p>{item.name}</p>
              </li>
            );
          })}
        </CastList>
      )}
    </section>
  );
};
