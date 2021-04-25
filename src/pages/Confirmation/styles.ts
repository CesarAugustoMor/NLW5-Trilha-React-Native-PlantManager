import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 96px;
`;

export const Title = styled.Text`
  margin-top: 64px;

  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.heading600};
`;

export const SubTitle = styled.Text`
  padding: 16px 24px;

  font-size: 17px;
  line-height: 25px;
  text-align: center;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Footer = styled.View`
  width: 100%;
  margin-top: 42px;
  padding: 0 20px;
`;
