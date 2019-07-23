import styled from 'styled-components';

export const CollectionsPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  &:first-child {
    margin-top: 0;
  }
`;

export const PreviewTitle = styled.div`
  font-size: 28px;
  margin-bottom: 25px;
  letter-spacing: 2px;
  text-align: center;
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;