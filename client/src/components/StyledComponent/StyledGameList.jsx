import styled from 'styled-components';

export const ContainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em;
`;

export const PaginationButton = styled.button`
  font-size: 1.2em;
  padding: 0.5em;
  margin: 0.5em;
  border-radius: 0.5em;
  border: none;
  background-color: #318aac;
  color: white;

  &:hover {
    background-color: #75b9d6;
    cursor: pointer;
  }
`;

export const PaginationText = styled.p`
  font-size: 1.2em;
`;
