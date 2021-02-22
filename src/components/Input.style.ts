import styled, {css} from 'styled-components';

export const BaseInputCss = css`
  padding: 10px 8px;
  border-radius: 5px;
  border: solid 1px gray;
  margin-bottom: 5px;
  &.error{
    border-color:red
  }
`;

export const StyledInput = styled.input`
  ${BaseInputCss}
`;
