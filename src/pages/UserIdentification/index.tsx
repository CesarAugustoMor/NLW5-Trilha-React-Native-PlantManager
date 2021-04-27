import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Keyboard, Platform } from 'react-native';

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
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserIdentification: React.FC = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  useEffect(() => {
    AsyncStorage.getItem('@plantManager:userName').then(item => {
      if (!item) {
        return;
      }

      navigation.navigate('PlantSelect');
    });
  }, [navigation]);

  const handleSubmit = useCallback(async () => {
    if (!name) {
      Alert.alert(
        'Me diz como chamar você 😥',
        'Por Favor, me diz qual é o seu nome! 😥'
      );
      return;
    }

    try {
      await AsyncStorage.setItem('@plantManager:userName', name);

      navigation.navigate('Confirmation', {
        title: 'Prontinho!',
        subTitle:
          'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        icon: 'smile',
        textButton: 'Começar',
        nextScreen: 'PlantSelect',
      });
    } catch (error) {
      Alert.alert(
        'Não foi possível salvar seu nome 😥',
        'Não conseguimos salvar o seu nome. Talvez seu celular esteja cheio.'
      );
    }
  }, [navigation, name]);

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
              <Button
                isDisabled={!!!name}
                disabled={!!!name}
                onPress={handleSubmit}
              >
                Confirmar
              </Button>
            </Footer>
          </Form>
        </KeyboardFeedback>
      </Content>
    </Container>
  );
};

export default UserIdentification;
