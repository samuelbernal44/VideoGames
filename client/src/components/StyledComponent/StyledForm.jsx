import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  margin: 2em auto;
  max-width: 60%;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1em;
  width: calc(50% - 1em);
`;

export const FormLabel = styled.label`
  font-size: 1.2em;
  margin-bottom: 0.5em;
`;

export const FormInput = styled.input`
  font-size: 1em;
  padding: 0.5em;
  border-radius: 0.5em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 5em;
`;

export const FormButton = styled.button`
  font-size: 1.2em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  border: none;
  background-color: #318aac;
  color: white;

  &:hover {
    background-color: #75b9d6;
    cursor: pointer;
  }
`;

export const FormP = styled.p`
  color: red;
`;
