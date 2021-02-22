import styled from 'styled-components';

export const StyledSliderImage = styled.img`
  display:none;
  width:100%;
  object-fit: cover;
  &.active{
    display:block
  }
`;

StyledSliderImage.displayName = 'StyledSliderImage';
