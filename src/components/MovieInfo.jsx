import { MovieWrapper } from './MovieInfo.styled';
import { BASE_IMAGE_URL } from './TrendMovies';
export const MovieInfo = ({ movie }) => {
  const { poster_path, title, popularity, overview } = movie;
  return (
    <MovieWrapper>
      <img src={BASE_IMAGE_URL + poster_path} alt={title} loading="lazy" />
      <div>
        <h2>{title}</h2>
        <p>
          <h3>Popularity :</h3> {popularity}
        </p>
        <p>
          <h3>Overview :</h3> {overview}
        </p>
      </div>
    </MovieWrapper>
  );
};
