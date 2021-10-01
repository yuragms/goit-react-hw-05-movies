import { List, Item, NavLinkByStyled } from "./Navigation.styled.jsx";

const Navigation = () => (
  <List>
    <Item>
      <NavLinkByStyled to="/" exact>
        Home
      </NavLinkByStyled>
    </Item>
    <Item>
      <NavLinkByStyled to="/movies" exact>
        Movies
      </NavLinkByStyled>
    </Item>
  </List>
);

export { Navigation };
