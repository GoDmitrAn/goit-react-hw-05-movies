import styled from '@emotion/styled';
export const CastList = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  flex-wrap: wrap;
  & li {
    display: flex;
    flex-direction: column;
    width: 130px;
    text-align: center;

    & img {
      max-height: 100%;
    }
    & p {
      margin: 0;
    }
  }
`;
export const Character = styled.h4`
  margin-top: 0;
  margin-bottom: 5px;
`;
