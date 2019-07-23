import styled, { css } from 'styled-components';

const fontSize = css`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ItemImage = styled.img`
  width: 30%;
`;

export const ItemsDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const ItemName = styled.span`
  ${fontSize}
`;

export const ItemPrice = styled.span`
  ${fontSize}
`;