import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

import waterDrop from '../../assets/waterdrop.svg';

export const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: space-between;
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 32px 50px;
  align-items: center;
  justify-content: center;
`;

export const PlantName = styled.Text`
  margin-top: 32px;

  font-family: ${fonts.heading600};
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  text-align: center;
  color: ${colors.heading};
`;

export const PlantDescription = styled.Text`
  margin-top: 16px;

  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0;
  text-align: center;
  color: ${colors.body};
`;

export const Controllers = styled.View`
  background-color: ${colors.white};
  padding: 20px;
  padding-bottom: ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  border-radius: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue_light};
  padding: 16px;
  position: relative;
  bottom: 18%;
`;

export const TipImage = styled(waterDrop)`
  height: 56px;
  width: 56px;
`;

export const TipText = styled.Text`
  max-width: 256px;
  width: 100%;
  font-family: ${fonts.text};
  font-size: 15px;
  line-height: 23px;
  letter-spacing: 0;
  text-align: left;
  color: ${colors.blue};
`;

export const TimeLabel = styled.Text`
  font-family: ${fonts.text};
  font-size: 13px;
  line-height: 23px;
  letter-spacing: 0;
  text-align: center;
  color: ${colors.body};
`;

export const TimePickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const TimePickerText = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`;
