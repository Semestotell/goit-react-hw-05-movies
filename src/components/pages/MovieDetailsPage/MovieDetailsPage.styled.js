import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 1000px;
  margin: 10px auto;
`;
export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  color: black;
  font-weight: 700;
  border: 1px solid grey;
  background-color: #d0d0d0;
  cursor: pointer;
  &:hover,
  &:focus,
  &.active {
    background-color: #0093ff;
    color: white;
  }
`;
export const FilmPage = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 10px;
`;
export const Image = styled.img`
  width: 300px;
  margin-top: 20px;
`;
export const Title = styled.h2`
  margin-top: 30px;
  font-size: 25px;
  font-weight: 700;
`;
export const Context = styled.p`
  margin-top: 20px;
`;

export const SecondTitle = styled.h3`
  margin-top: 30px;
  font-size: 18px;
  font-weight: 700;
`;

export const Genres = styled.p`
  display: inline-block;
  margin: 15px 20px 0 0;
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  color: black;
  margin: 10px;
  &:hover,
  &:focus,
  &.active {
    color: #0093ff;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 10px;
`;
