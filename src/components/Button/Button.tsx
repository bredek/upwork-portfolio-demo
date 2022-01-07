import React from "react";
import { SButton } from "./styles";

export interface IButton {
  color?: string;
  textColor?: string;
  label: string;
  onClick?: () => void;
}


export const Button = ({ label, ...props }: IButton) => {
  return (
    <SButton {...props}>
      {label}
    </SButton>
  );
};
