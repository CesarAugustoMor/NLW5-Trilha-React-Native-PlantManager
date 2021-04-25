import React, { useCallback } from 'react';
import Button from '../../components/Button';

import { Container, Content, Emoji, SubTitle, Title, Footer } from './styles';
import { useNavigation } from '@react-navigation/core';

const Confirmation: React.FC = () => {
  const navigation = useNavigation();

  const handleMoveOn = useCallback(() => {
    navigation.navigate('PlantSelect');
  }, [navigation]);
  return (
    <Container>
      <Content>
        <Emoji> 😊 </Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button onPress={handleMoveOn}>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
