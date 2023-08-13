import styled from 'styled-components';

export const ContainerDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TopSection = styled.div`
  display: flex;
  width: 100%;
`;

export const BottomSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  width: 50%;
  margin: 0.5em;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1em;
`;

export const TextContainer = styled.div`
  width: 50%;
  margin: 0.5em;
  margin-right: 5em;
`;

export const Title1 = styled.h1`
  margin: 2px;
  font-size: 30px;
  color: yellow;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  /* position: absolute; */
  left: 0px;
  bottom: 5px;
  padding: 10px;
`;

export const StyledP = styled.p`
  margin: 5px;
  font-weight: bold;
  color: yellow;
`;
