import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const ContactContainer = styled.div`
  width: 95vw;
  max-width: 25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Title = styled.div`
  margin: 0.8rem 0;
  text-transform: uppercase;
`;

export const TextAreaLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const TextAreaContainer = styled.textarea`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    &{shrinkLabelStyles}
  }
`;