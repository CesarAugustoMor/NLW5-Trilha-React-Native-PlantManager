import React, { useCallback } from 'react';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/core';

import { Container, Content, Emoji, SubTitle, Title, Footer } from './styles';
import { useRoute } from '@react-navigation/native';

interface ConfirmationProps {
  title: string;
  subTitle: string;
  icon: 'smile' | 'hug';
  textButton: string;
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😊',
};

const Confirmation: React.FC = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const {
    title,
    subTitle,
    icon,
    textButton,
    nextScreen,
  } = params as ConfirmationProps;

  const handleMoveOn = useCallback(() => {
    navigation.navigate(nextScreen);
  }, [navigation, nextScreen]);
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <Footer>
          <Button onPress={handleMoveOn}>{textButton}</Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
