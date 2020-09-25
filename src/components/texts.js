import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {isTablet} from 'react-native-device-info';
import colors from '../styles/colors';

const colorsType = Object.keys(colors);

const styles = StyleSheet.create({
  small: {fontSize: !isTablet() ? 12 : 18},
  medium: {fontSize: !isTablet() ? 16 : 24},
  large: {fontSize: !isTablet() ? 18 : 24},
  xxl: {fontSize: !isTablet() ? 50 : 56},
  xl: {fontSize: !isTablet() ? 40 : 46},
  l: {fontSize: !isTablet() ? 36 : 40},
  h1: {fontSize: !isTablet() ? 30 : 34},
  h2: {fontSize: !isTablet() ? 24 : 28},
  h3: {fontSize: !isTablet() ? 20 : 24},
  bold: {fontWeight: 'bold'},
  primary: {color: colors.primary},
  primarySoft: {color: colors.primarySoft},
  magenta: {color: colors.magenta},
  teal: {color: colors.teal},
  white: {color: colors.white},
  greySoft: {color: colors.greySoft},
  greyTransparent: {color: colors.greyTransparent},
  grey: {color: colors.grey},
  red: {color: colors.red},

  defaultBig: {fontWeight: 'bold'},
});

export const TextBig = (props) => {
  const {children, style = {}, size = 'xxl', color = 'primary'} = props;
  return (
    <Text
      style={{
        ...styles.defaultBig,
        ...styles[size],
        ...styles[color],
        ...style,
      }}>
      {children}
    </Text>
  );
};

TextBig.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object, // There are some bugs with TextPropTypes so use propTypesobject instead
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l']),
  color: PropTypes.oneOf(colorsType),
};

export const AnimatableTextBig = (props) => {
  const {
    children,
    style = {},
    size = 'xxl',
    color = 'primary',
    show = false,
  } = props;
  return (
    <Animatable.Text
      animation={!show ? null : 'bounceIn'}
      style={{
        ...styles.defaultBig,
        ...styles[size],
        ...styles[color],
        ...style,
      }}>
      {children}
    </Animatable.Text>
  );
};

AnimatableTextBig.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object, // There are some bugs with TextPropTypes so use propTypesobject instead
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['xxl', 'xl', 'l']),
  color: PropTypes.oneOf(colorsType),
};

export const TextBody = (props) => {
  const {
    children,
    style = {},
    size = 'medium',
    bold = false,
    color = 'primary',
  } = props;
  return (
    <Text
      style={{
        ...styles[size],
        ...styles[color],
        ...(bold && styles.bold),
        ...style,
      }}>
      {children}
    </Text>
  );
};

TextBody.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object, // There are some bugs with TextPropTypes so use propTypesobject instead
  bold: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(colorsType),
};
