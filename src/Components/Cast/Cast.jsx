import { useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import { getCastInfoMovie } from "../../Servises/FetchMoviesApi.jsx";
import { List, Item, Name, Character, Img } from "./Cast.styled";

const Cast = () => {
  const [movieId, setMovieId] = useState(null);
  const [cast, setCast] = useState(null);
  const url = useRouteMatch();

  console.log(movieId);
  // const imgBaseUrl = "https://image.tmdb.org/t/p/w92/";
  // const urlNoFoto =
  //   "https://www.percomcourses.com/wp-content/uploads/2017/06/blankman.jpg";

  useEffect(() => {
    const idFromUrl = url.path.match(/movies\/([0-9]+)\//);
    setMovieId(idFromUrl[1]);
  }, [url.path]);

  useEffect(() => {
    console.log(1);
    movieId &&
      getCastInfoMovie(movieId).then((response) => {
        setCast(response);
      });
    console.log(2);
  }, [movieId]);

  console.log(movieId);
  console.log(cast);
  return (
    <>
      <List>
        {cast &&
          cast.map((castItem) => (
            <Item key={castItem.id}>
              <Img
                src={
                  castItem.profile_path
                    ? `${process.env.REACT_APP_IMG_BASE_URL}${castItem.profile_path}`
                    : process.env.REACT_APP_CAST_NO_FOTO
                }
              />
              <Name>{castItem.name}</Name>
              <Character>{castItem.character}</Character>
            </Item>
          ))}
      </List>
      {cast && cast.length === 0 && (
        <p>We don't have any cast for this movie.</p>
      )}
    </>
  );
};

export default Cast;
