import React, { useCallback, useState } from 'react';
import { Keyboard, Platform } from 'react-native';

import Button from '../../components/Button';
import { Header } from './styles';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  Emoji,
  Footer,
  Form,
  Input,
  Title,
  Content,
  KeyboardFeedback,
} from './styles';

const UserIdentification: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const handleSubmit = useCallback(() => {
    navigation.navigate('Confirmation');
  }, [navigation]);

  const handleInputBlur = useCallback(() => {
    setIsInputFocused(false);
    setIsInputFilled(!!name);
  }, [name]);

  const handleInputFocus = useCallback(() => {
    setIsInputFocused(true);
  }, []);

  const handleInputChange = useCallback((value: string) => {
    setIsInputFilled(!!value);
    setName(value);
  }, []);
  return (
    <Container>
      <Content behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <KeyboardFeedback onPress={Keyboard.dismiss}>
          <Form>
            <Header>
              <Emoji>{isInputFilled ? '😊' : '😀'}</Emoji>
              <Title>Como podemos {'\n'}chamar você?</Title>
            </Header>
            <Input
              isFilled={isInputFilled}
              isFocused={isInputFocused}
              placeholder="Digite um nome"
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <Footer>
              <Button onPress={handleSubmit}>Confirmar</Button>
            </Footer>
          </Form>
        </KeyboardFeedback>
      </Content>
    </Container>
  );
};

export default UserIdentification;
