import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';
import styled, { css } from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface ContainerProps {
  isDisabled?: boolean | null;
  style?: any;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  background: ${colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;

  ${props =>
    props.isDisabled
      ? css`
          opacity: 0.7;
        `
      : ''}
`;

export const Text = styled.Text`
  font-size: 17px;
  font-family: ${fonts.heading500};
  color: ${colors.white};
`;
