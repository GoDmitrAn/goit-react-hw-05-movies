import styled from '@emotion/styled';

export const MovieWrapper = styled.div`
  display: flex;
`;
export const PosterWrapp = styled.div`
  flex: 2;
  & img {
    max-width: 100%;
  }
`;
export const InfoTitle = styled.span`
  font-weight: bold;
  font-size: 18px;
`;
export const DescriptionMovie = styled.div`
  padding: 10px 20px;
  flex: 3;
`;
