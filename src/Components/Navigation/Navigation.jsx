import { NavLink } from "react-router-dom";
import { List, Item } from "./Navigation.styled.jsx";

const Navigation = () => (
  <List>
    <Item>
      <NavLink to="/" exact>
        Home
      </NavLink>
    </Item>
    <Item>
      <NavLink to="/" exact>
        Movies
      </NavLink>
    </Item>
  </List>
);

export { Navigation };
