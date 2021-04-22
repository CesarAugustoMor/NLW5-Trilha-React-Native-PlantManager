import React from 'react';
import { Text } from 'react-native';

import { Container, Title, SubTitle, Button, Image } from './styles';

import wateringImg from '../../assets/watering.png';

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>Gerencie{'\n'} suas plantas de forma fácil</Title>
      <Image source={wateringImg} />
      <SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </SubTitle>
      <Button activeOpacity={0.7}>
        <Text>Avançar</Text>
      </Button>
    </Container>
  );
};

export default Welcome;
