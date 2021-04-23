import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
`;

export const Content = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
`;

export const KeyboardFeedback = styled.TouchableWithoutFeedback`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  padding: 0 54px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  margin-top: 24px;

  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading};
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput<InputProps>`
  width: 100%;
  border-bottom-width: 1px;
  border-color: ${(props) =>
    props.isFocused || props.isFilled ? colors.green : colors.gray};
  color: ${colors.heading};
  font-size: 18px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 42px;
  padding: 0 20px;
`;
