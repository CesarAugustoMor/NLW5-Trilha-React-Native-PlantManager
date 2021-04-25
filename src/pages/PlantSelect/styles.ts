import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.background};
`;

export const HeaderContainer = styled.View`
  padding: 0 32px;
`;

export const Title = styled.Text`
  margin-top: 8px;

  font-family: ${fonts.heading500};
  font-size: 17px;
  line-height: 23px;
  color: ${colors.heading};
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  font-size: 17px;
  line-height: 23px;
  color: ${colors.heading};
`;

export const EnvironmentList = styled.View`
  height: 40px;
  margin: 32px 0;
  margin-left: 32px;
`;

export const Plants = styled.View`
  flex: 1;
  padding: 0 32px;
`;
