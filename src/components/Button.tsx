import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {StyledButton} from '@Components/Button.style';

const Button: FC<IButtonProps> = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
);

Button.defaultProps = {
  children: ['Button'],
};

interface IButtonProps {
  children: any,
  onClick: ()=>void
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
};

export default Button;
