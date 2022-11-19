import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

export const Card = styled.li`
  border: 1px solid grey;
`;
export const Photo = styled.img`
  width: 200px;
`;

export const EmptyPhoto = styled.div`
  width: 200px;
  height: 300px;
  background-color: grey;
`;
export const Character = styled.h3`
  max-width: 200px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  margin: 10px auto;
`;
export const Name = styled.h4`
  text-align: center;
  margin: 10px;
`;
