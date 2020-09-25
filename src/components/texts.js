import React from 'react';
import {StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Text} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import colors from '../styles/colors';

const colorsType = Object.keys(colors);

const styles = StyleSheet.create({
  small: {fontSize: 12},
  medium: {fontSize: 16},
  large: {fontSize: 18},
  xxl: {fontSize: 55},
  xl: {fontSize: 45},
  l: {fontSize: 40},
  h1: {fontSize: 30},
  h2: {fontSize: 24},
  h3: {fontSize: 20},
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
