import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

interface Props {
  isActive: boolean;
}

export const Container = styled(LinearGradient)`
  width: 76px;
  height: 40px;
  margin: 0 4px;
  border-radius: 12px;
`;

export const Content = styled(RectButton)<Props>`
  width: 76px;
  height: 40px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isActive
      ? css`
          background: ${colors.green_light};
          margin: 0 4px;
        `
      : ''}
`;

export const Title = styled.Text<Props>`
  font-family: ${(props) => (props.isActive ? fonts.heading600 : fonts.text)};
  color: ${(props) => (props.isActive ? colors.green_dark : colors.heading)};
  font-size: 13px;
  line-height: 23px;
  text-align: center;
`;
