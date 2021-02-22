import styled, {css} from 'styled-components';

export const BaseButtonCss = css`
  background: purple;
  text-decoration: none;
  color: white;
  padding: 10px 25px;
  border-radius: 5px;
  display: inline-block;
`;
export const StyledButton = styled.button`
  ${BaseButtonCss};
  border: none;
`;
