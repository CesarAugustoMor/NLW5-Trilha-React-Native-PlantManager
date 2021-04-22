import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  margin-top: 42px;
  margin-left: 40px;
  margin-right: 40px;

  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: ${colors.heading};
`;

export const SubTitle = styled.Text`
  margin-left: 40px;
  margin-right: 40px;

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0;
  text-align: center;
  color: ${colors.heading};
`;

export const Button = styled.TouchableOpacity`
  width: 56px;
  height: 56px;

  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 292px;
  height: 284px;
`;
