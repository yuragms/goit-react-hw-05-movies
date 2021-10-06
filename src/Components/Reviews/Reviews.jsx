// import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getReviewInfoMovie } from "../../Servises/FetchMoviesApi.jsx";

const Review = ({ movieId }) => {
  const [review, setReview] = useState(null);

  useEffect(() => {
    getReviewInfoMovie(movieId).then((response) => setReview(response));
  }, [movieId]);

  console.log(review);
  return (
    <>
      <ul>
        {review &&
          review.map((item) => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
      </ul>
      {review && review.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
    </>
  );
};

export default Review;
