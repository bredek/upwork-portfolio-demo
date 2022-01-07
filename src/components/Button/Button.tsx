import React from "react";
import { Wrapper } from "./styles";

export interface IButton {
  color?: string;
  textColor?: string;
  label: string;
  onClick: () => void;
}
/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: IButton) => {
  return (
    <Wrapper {...props}>
      {label}
    </Wrapper>
  );
};
