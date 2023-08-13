import styled from 'styled-components';

export const ContainerSearchBar = styled.div`
  /* border: 1px solid white; */
  display: flex;
  margin: auto;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 30%;
  height: 10%;
  padding: 1px;
  justify-content: space-around;
  /* background-color: lightgray; */
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 10px white;
`;

export const Button = styled.button`
  color: rgba(255, 255, 255, 0.9) !important;
  margin: 0.3em;
  margin-left: 0.5em;
  border-radius: 0.5em;
  font-size: 20px;
  font-weight: 500;
  padding: 0.5em 1.2em;
  background: rgba(75, 108, 183, 0.1);
  border: 2px solid;
  border-color: #318aac;

  &:hover {
    color: rgba(255, 255, 255, 1) !important;
    box-shadow: 0 2px 15px #ffffff;
    transition: all 0.2s ease;
    background: rgba(75, 108, 183, 0.8);
  }
`;

export const Input = styled.input`
  width: 55%;
  border-radius: 5px;
  height: 30px;
  /* margin-right: 10px; */
`;
