import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const List = styled.ul`
  padding-left: 35px;
  list-style: none;
  display: flex;
`;

const Item = styled.li`
  margin-right: 25px;
`;

const NavLinkByStyled = styled(NavLink)`
  color: black;
  font-weight: 700;
  font-size: 18px;
  &.active {
    color: red;
  }
`;

export { List, Item, NavLinkByStyled };
