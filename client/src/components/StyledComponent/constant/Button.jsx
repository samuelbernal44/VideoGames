import { styled } from 'styled-components';

const Button = styled.button`
  color: rgba(255, 255, 255, 0.9) !important;
  margin: 1em;
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

export default Button;
