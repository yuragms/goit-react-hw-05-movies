import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const AdditionBox = styled.div`
  padding: 25px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
`;

const List = styled.ul`
  padding-left: 30px;
`;

const Item = styled.li`
  margin-bottom: 5px;
`;

const LinkStyled = styled(NavLink)`
  color: blue;
  &.active {
    color: red;
  }
`;

export { AdditionBox, Title, List, Item, LinkStyled };
