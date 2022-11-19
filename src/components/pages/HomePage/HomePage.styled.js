import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Wrapper = styled.div`
  display: block;
  padding: 20px;
  width: 800px;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: block;
`;
export const Item = styled.li`
  text-align: center;
  line-height: 25px;
  color: black;
`;
export const Link = styled(NavLink)`
  color: black;
  font-weight: 700;
  text-decoration: none;
  &:hover,
  &:focus {
    color: #00bfff;
  }
`;
