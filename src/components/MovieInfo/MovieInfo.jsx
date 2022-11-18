import {
  DescriptionMovie,
  InformationBox,
  InfoTitle,
  MovieWrapper,
  PosterWrapp,
} from './MovieInfo.styled';
import { BASE_IMAGE_URL } from '../TrendMovies/TrendMovies';
import { Link, Outlet, useLocation } from 'react-router-dom';
export const MovieInfo = ({ movie }) => {
  const { poster_path, title, popularity, overview, release_date, genres } =
    movie;
  const location = useLocation();
  // location.state.from = backHref;
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
      <InformationBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast" state={{ from: location.state.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state.from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </InformationBox>
      <Outlet />
    </>
  );
};
