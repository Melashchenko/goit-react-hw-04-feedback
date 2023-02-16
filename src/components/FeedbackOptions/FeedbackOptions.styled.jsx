import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  color: black;
  background: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid pink;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: 5px;

  &:hover {
    background-color: tomato;
  }
`;
