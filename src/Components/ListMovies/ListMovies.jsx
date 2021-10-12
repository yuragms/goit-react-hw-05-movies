import { Link, useLocation } from "react-router-dom";

const ListMovies = ({ topMovies }) => {
  const location = useLocation();

  console.log(location);
  return (
    <ul>
      {topMovies.map(({ original_title, id }) => (
        <li key={id}>
          <Link to={{ pathname: `/movies/${id}`, state: { from: location } }}>
            {original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListMovies;
