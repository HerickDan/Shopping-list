import { ReactNode } from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #027fe9;
  color: black;
  border: solid 2px black;
  margin: 2%;
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s;
  &:hover {
    background-color: white;
  }
`;

interface ButtonProps {
  children: ReactNode | string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps): JSX.Element => {
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>;
};
