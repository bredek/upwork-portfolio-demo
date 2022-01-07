import React from "react";

import {
  SPortfolioListItem,
  ImageWrapper,
  TextWrapper,
  Title,
  Description,
} from "./styles";

export interface IPortfolioListItem {
  imgSource: string;
  title?: string;
  description?: string;
}

export const PortfolioListItem = ({
  imgSource,
  title,
  description,
}: IPortfolioListItem) => {
  return (
    <SPortfolioListItem>
      <ImageWrapper>
        <img src={imgSource} alt="mock" />
      </ImageWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>
    </SPortfolioListItem>
  );
};
