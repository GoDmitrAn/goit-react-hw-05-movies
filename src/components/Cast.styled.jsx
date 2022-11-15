import styled from '@emotion/styled';
export const CastList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  flex-wrap: wrap;
  & li {
    width: 150px;
    height: 100px;
    display: block;
    margin-bottom: 30px;
    & img {
      max-width: 100%;
      max-height: 100%;
    }
    & p {
      margin: 0;
    }
  }
`;
