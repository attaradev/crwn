import styled, { css } from 'styled-components';

const spanWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ItemQuantity = styled.span`
  display: flex;
  ${spanWidth}
`;

export const ItemName = styled.span`
  ${spanWidth}
`;

export const ItemPrice = styled.span`
  ${spanWidth}
`;

export const Arrow = styled.span`
  display: block;
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 1rem;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
