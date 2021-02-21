import React, {FC, useState} from 'react';
import Proptypes from 'prop-types';
const Image: FC<IImageProps> = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return <img src={props.image} />;
};

interface IImageProps {
  image: string;
};

Image.propTypes = {
  image: Proptypes.string.isRequired,
}