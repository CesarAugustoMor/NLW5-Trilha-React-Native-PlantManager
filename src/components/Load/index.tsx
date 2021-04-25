import React from 'react';

import loadAnimation from '../../assets/load.json';

import { Animation, Container } from './styles';

const Load: React.FC = () => {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay />
    </Container>
  );
};

export default Load;
