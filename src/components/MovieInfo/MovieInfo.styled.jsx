import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
  border-bottom: 1px solid #2e2e2e;
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
  flex: 7;
`;
export const InformationBox = styled.div`
  border-bottom: 1px solid #2e2e2e;
  margin-top: 10px;
  & ul {
  }
  & h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
export const ToBack = styled(Link)`
  display: block;
  width: 60px;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  background-color: aliceblue;
  font-weight: 500;
  border: 1px solid #2e2e2e;
  border-radius: 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: antiquewhite;
  }
`;
