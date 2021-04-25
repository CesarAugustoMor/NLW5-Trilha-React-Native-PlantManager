import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';

import { Container, Title, SubTitle, Button, Image, Icon } from './styles';

const Welcome: React.FC = () => {
  const navigation = useNavigation();

  const handleStart = useCallback(() => {
    navigation.navigate('UserIdentification');
  }, [navigation]);
  return (
    <Container>
      <Title>
        Gerencie{'\n'} suas plantas de{'\n'} forma fácil
      </Title>
      <Image />
      <SubTitle>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </SubTitle>
      <Button activeOpacity={0.7} onPress={handleStart}>
        <Icon name="chevron-right" />
      </Button>
    </Container>
  );
};

export default Welcome;
