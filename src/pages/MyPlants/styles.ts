import styled from 'styled-components/native';

import waterDrop from '../../assets/waterdrop.svg';

import colors from '../../styles/colors';
import { LinearGradient } from 'expo-linear-gradient';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;

  padding-top: 50px;
  background: ${colors.background};
`;

export const Spotlight = styled(LinearGradient)`
  width: 100%;
  height: 88px;
  border-radius: 20px;
`;

export const SpotlightContent = styled.View`
  width: 100%;
  height: 88px;
  padding: 16px;
  border-radius: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled(waterDrop)`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${colors.blue};
  padding: 0 16px;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  margin: 20px 0;

  font-family: ${fonts.heading600};
  font-size: 24px;
  line-height: 32px;

  color: ${colors.heading};
`;

export const PlantsList = styled.View`
  flex: 1;
  width: 100%;
`;
