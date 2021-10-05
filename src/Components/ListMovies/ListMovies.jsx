import { Link } from "react-router-dom";

const listMovies = (topMovies) => {
  return (
    <ul>
      {topMovies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{original_title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default listMovies;
