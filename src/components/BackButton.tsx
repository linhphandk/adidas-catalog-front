import React, {FC} from 'react';
import PropTypes from 'prop-types';
import {IBackButtonProps} from './BackButton.interface';
import {
  StyledBackArrow, StyledBackButton, StyledLink,
} from './BackButton.style';
import ArrowIcon from '@Images/arrow.svg';
const BackButton:FC<IBackButtonProps> = (props) => (
  <StyledBackButton>
    <StyledLink to={props.backUrl}>
      <StyledBackArrow src={ArrowIcon} />
      <div>
        {props.backText}
      </div>
    </StyledLink>
  </StyledBackButton>
);

BackButton.propTypes = {
  backUrl: PropTypes.string.isRequired,
  backText: PropTypes.string.isRequired,
};

export default BackButton;
