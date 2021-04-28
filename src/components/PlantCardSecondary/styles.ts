import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(LinearGradient)`
  flex: 1;
  width: 100%;
  max-height: 80px;
  height: 80px;
  margin: 10px 0;
  border-radius: 20px;
`;

export const Content = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 80px;
  padding: 20px 16px;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
`;

export const Title = styled.Text`
  font-family: ${fonts.heading500};
  font-size: 17px;
  line-height: 25px;

  color: ${colors.body};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-family: ${fonts.text};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
  text-align: right;

  color: ${colors.body_light};
`;

export const Time = styled.Text`
  font-family: ${fonts.heading500};
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0;
  text-align: right;

  color: ${colors.body};
`;

export const ButtonRemove = styled(RectButton)`
  width: 124px;
  height: 80px;
  margin-top: 10px;
  border-radius: 20px;

  background-color: ${colors.red};

  justify-content: center;
  align-items: center;
  margin-left: -32px;
  padding-left: 24px;
`;
