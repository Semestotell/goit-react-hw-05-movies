import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageWrapper = styled.div`
  display: block;
  width: 1200px;
  margin: 0 auto;
`;
export const Form = styled.form` 
display: flex;
justify-content: center;
width: 1000px;
padding: 20px;
border-bottom: 2px solid grey;
margin: 0 auto;
gap: 20px;
`
export const Input = styled.input` 
width: 400px;
padding: 10px;
font-size: 16px;
`
export const SearchButton = styled.button` 
cursor: pointer;
display: block;
  padding: 10px 20px;
  color: black;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid grey;
  background-color: #d0d0d0;
  &:hover,
  &:focus {
    background-color: #00bfff;
    color: white;
  }
`
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
  text-decoration: underline;
  &:hover,
  &:focus {
    color: #0093ff;
  }
`;
