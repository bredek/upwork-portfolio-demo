import styled from "styled-components";

interface IWrapper {
  color?: string;
  textColor?: string;
}

export const Wrapper = styled.button<IWrapper>`
  padding: 13px 40px;
  background-color: ${(props) =>
    props.color ? props.color : "var(--ui-button-01"};

  color: ${(props) => (props.textColor ? props.textColor : "var(--ui-01")};

  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 30px;

  letter-spacing: 0.566726px;

  border: none;
`;
