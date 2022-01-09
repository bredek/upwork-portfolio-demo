import styled, { css } from "styled-components";

export const SPortfolioListItem = styled.div`
  width: 585px;
  height: 601px;
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: var(--ui-02);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 290px;

  object-fit: cover;

  img {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  margin: 0 auto;
  padding: 18px 30px 30px;

  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextWrap = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  max-width: 460px;
`;

export const Title = styled.p`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 40px;
  letter-spacing: 0.762901px;

  ${TextWrap};
`;

export const Description = styled.p`
  margin-top: 16px;

  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.523132px;

  /* ${TextWrap}; */
`;
