import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsList } from './Reviews.styled';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [reviewsErr, setReviewsErr] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function getReviewsById(id) {
      try {
        const response = await axios(
          `https://api.themoviedb.org/3/movie/${id}/reviews`,
          {
            signal: controller.signal,
            params: {
              api_key: process.env.REACT_APP_API_KEY,
            },
          }
        );
        if (response.data.results.length === 0) {
          setReviewsErr('Sorry, no reviews');
          return;
        }
        setReviews(response.data.results);
      } catch (error) {}
    }
    getReviewsById(movieId);
    return () => {
      controller.abort();
      setReviews(null);
    };
  }, [movieId]);
  return (
    <section>
      {reviews && (
        <ReviewsList>
          {reviews.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.author} :</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ReviewsList>
      )}
      {reviewsErr && <p>{reviewsErr}</p>}
    </section>
  );
};
export default Reviews;
