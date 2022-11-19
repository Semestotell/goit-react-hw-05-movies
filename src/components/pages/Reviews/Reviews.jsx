import { GetReviews } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Author, Review } from './Reviews.styled';
import { toast } from 'react-toastify';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fetchRewiews() {
      try {
        const response = await GetReviews(movieId);
        setReviews(response);
      } catch (error) {
        toast.error('Nothing are wrong! Not fething trending movies!');
      }
    }
    fetchRewiews();
  }, [movieId]);
  console.log(reviews);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <Review key={index}>
              <Author>Author: {review.author}</Author>
              <p>{review.content}</p>
            </Review>
          ))}
        </ul>
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </>
  );
};
