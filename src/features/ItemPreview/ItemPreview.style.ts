import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledTitle = styled.p`

`;
export const StyledPreviewImage = styled.img`
  width:100%;
  object-fit: contain
`;

StyledPreviewImage.displayName = 'StyledPreviewImage';

export const StyledPreview = styled.div`
  position:relative;
  widht: 100px;
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color:black;
`;
