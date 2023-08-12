import styled from 'styled-components';

export const ContainerCard = styled.div`
  flex-basis: cal(20% - 10px);
  margin-bottom: 10px;
  user-select: none;
  max-width: 250px;
  margin: 0.5em;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(0deg, #21407e 0%, rgba(73, 9, 126, 0.5));
  box-shadow: 0 4px 5px 2px #fcfdfd85;
  border-radius: 0.7rem;
  overflow: hidden;
  transition: 0.5s all;
  ::before {
    position: fixed;
    content: '';
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: 0.7s all;
  }
  &:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 4px 2px 5px #000000aa;
    transform: scale(1.01);
  }
  ::before {
    filter: brightness(0.5);
    top: -100%;
    left: 200%;
  }
`;

export const Title2 = styled.h2`
  font-size: 20px;
  color: #ffffff;
  width: 80%;
  /* Center the element horizontally */
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  object-fit: cover;
`;

export const ContainerGenres = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GridGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ItemsGenres = styled.span`
  margin: 5px;
`;

export const StyledP = styled.p`
  margin: 5px;
  font-weight: bold;
  color: yellow;
`;
