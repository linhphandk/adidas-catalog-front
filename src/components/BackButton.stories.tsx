import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BackButton from './BackButton';

export default {
  title: 'Components/Back Button',
  components: BackButton,
};

export const Primary = () => (
  <Router>
    <BackButton
      backText="Back Button"
      backUrl="/"
    />
  </Router>
);
