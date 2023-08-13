import styled from 'styled-components';

export const ContainerMultiSelect = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const MultiSelectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
`;

export const MultiSelectTag = styled.span`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0.5rem;
  background-color: #eee;
  border-radius: 0.25rem;
`;

export const MultiSelectToggle = styled.button`
  margin-left: auto;
`;

export const MultiSelectOptions = styled.ul`
  margin-top: 0.5rem;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
