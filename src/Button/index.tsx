import { ReactNode } from "react";
import styled from "styled-components";

const ButtonDark = styled.button`
  background-color: rgb(22, 25, 21);
  color: rgb(225, 221, 217);
  border: solid 2px black;
  margin: 2%;
  width: 100%;
  font-size: 1.3em;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 60px;
  transition: 0.2s;
  &:hover {
    background: none;
    color: rgb(22, 25, 21)
  }
`;

const ButtonLight = styled.button`
  background: none;
  color: black;
  border: solid 2px black;
  margin: 2%;
  width: 100%;
  font-size: 1.3em;
  text-align: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 60px;
  transition: 0.2s;
  &:hover {
     background: rgb(22, 25, 21);
     color:rgb(225, 221, 217)
  }
`;

interface ButtonProps {
  children: ReactNode | string;
  onClick: () => void;
  theme: "dark" | "light";
}

export const Button = ({
  theme,
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  return theme === "dark" ? (
    <ButtonDark onClick={onClick}>{children}</ButtonDark>
  ) : (
    <ButtonLight onClick={onClick}>{children}</ButtonLight>
  );
};
