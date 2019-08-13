import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem auto 6rem;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const TotalBlock = styled.div`
  margin-top: 20px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningText = styled.div`
  text-align: center;
  margin: 40px auto;
  font-size: 24px;
  color: red;
`;
