import React from 'react';
import {StyleSheet, View, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  row: {flexDirection: 'row'},
});

export const ViewRow = ({children, style}) => (
  <View style={[styles.row, style]}>{children}</View>
);

ViewRow.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};
