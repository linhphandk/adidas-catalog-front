import styled from 'styled-components';

export const StyledSliderWrapper = styled.div`
width:100%;
height:300px;
position:relative;
display:flex;
align-items: center;
`;

export const StyledLoadingIcon = styled.img`
  width: 50px;
`;

export const StyledImageWrapper = styled.div`
  flex:1;
  display:flex;
  justify-content: center;

`;

export const StyledSliderImage = styled.img`
  display:none;
  width:100%;
  object-fit: cover;
  &.active{
    display:block
  }
`;

export const StyledSliderButton = styled.img`
height:10%;
opacity: 0.5;
&.button__next{
  right:0
}
&.button__prev{
  transform: rotate(180deg);
}
&.active{
  opacity:1
}
`;

StyledSliderImage.displayName = 'StyledSliderImage';
