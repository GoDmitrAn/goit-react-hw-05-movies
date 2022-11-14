import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const MovieGallery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  padding-left: 0;
  margin-left: 0;
  width: 100%;
`;
export const MovieGalleryItem = styled(Link)`
  display: block;
  background-color: #f1f2f1;
  text-align: center;
  flex-basis: 280px;
  text-decoration: none;
  & img {
    max-width: 100%;
  }
`;
