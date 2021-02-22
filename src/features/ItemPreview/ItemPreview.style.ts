import {Link} from 'react-router-dom';
import styled, { css } from 'styled-components';

const SharedHiding = css`
  &.hide{
    display: none
  }
`;

export const StyledTitle = styled.p`

`;
export const StyledPreviewImage = styled.img`
  width:100%;
  object-fit: contain
`;

StyledPreviewImage.displayName = 'StyledPreviewImage';

export const StyledPreview = styled.div`
  position:relative;
  width: 100%;
  ${SharedHiding}
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color:black;
`;

export const StyledLoadingIcon = styled.img`
  width: 100%;
  transform: scale(0.2);
  ${SharedHiding}
`;
