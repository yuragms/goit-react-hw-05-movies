import { useRouteMatch } from "react-router-dom";
import {
  AdditionBox,
  Item,
  LinkStyled,
  List,
  Title,
} from "./AdditionaLlist.styled";

const AdditionaList = () => {
  const { url } = useRouteMatch();
  console.log(url);
  return (
    <AdditionBox>
      <Title>Additional information:</Title>
      <List>
        <Item>
          <LinkStyled to={`${url}/cast`}>Cast</LinkStyled>
        </Item>
        <Item>
          <LinkStyled to={`${url}/reviews`}>Reviews</LinkStyled>
        </Item>
      </List>
    </AdditionBox>
  );
};
export default AdditionaList;
