import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./reset";
import { CSSColors } from "./colors";

export const GSBase = createGlobalStyle`
    ${CSSReset}
    ${CSSColors}
    body{ 
        background-color: var(--white-2);
        color: var(--neutral-700);
    }
    :root{
        font-family: Arial;
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 30px;
    }
`;
