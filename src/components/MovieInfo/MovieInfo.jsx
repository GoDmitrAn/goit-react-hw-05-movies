import {
  DescriptionMovie,
  InfoTitle,
  MovieWrapper,
  PosterWrapp,
} from './MovieInfo.styled';
import { BASE_IMAGE_URL } from '../TrendMovies/TrendMovies';
import { Link, Outlet } from 'react-router-dom';
export const MovieInfo = ({ movie }) => {
  const { poster_path, title, popularity, overview, release_date, genres, id } =
    movie;
  return (
    <>
      <MovieWrapper>
        <PosterWrapp>
          <img src={BASE_IMAGE_URL + poster_path} alt={title} loading="lazy" />
        </PosterWrapp>
        <DescriptionMovie>
          <h2>{title}</h2>
          <p>
            <InfoTitle>Release : </InfoTitle>
            {release_date}
          </p>
          <p>
            <InfoTitle>Popularity :</InfoTitle> {popularity}
          </p>
          <p>
            <InfoTitle>Genres : </InfoTitle>
            {genres.map(genre => genre.name).join(', ')}
          </p>
          <p>
            <InfoTitle>Overview :</InfoTitle> {overview}
          </p>
        </DescriptionMovie>
      </MovieWrapper>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
