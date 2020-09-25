import React from 'react';
import {View, StyleSheet, ViewPropTypes} from 'react-native';
import {Grid, LineChart, YAxis} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import PropTypes from 'prop-types';
import {ViewRow} from './views';
import {TextBody} from './texts';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'react-native-elements';
import Spinner from 'react-native-spinkit';

const contentInset = {top: 10, bottom: 10};

const styles = StyleSheet.create({
  container: {borderRadius: 15, padding: 10},
  lineChart: {height: '100%', flex: 1, marginLeft: 20},
  flexOne: {flex: 1},
  flexRow: {flexDirection: 'row'},
  icon: {marginRight: 10, marginBottom: 5},
  textTitle: {marginTop: -3},
  spinner: {marginBottom: 30, alignSelf: 'center', marginTop: 10},
  itemCenter: {alignItems: 'center'},
});

const CardStats = (props) => {
  const {
    children,
    data = [],
    dataKey,
    containerStyle = {},
    title = '',
    loading,
    iconName = '',
    iconType = '',
    gridMin = 97,
    gridMax = 99,
    numOfTicks = 3,
    bezier = true,
  } = props;
  const dataGenerated = () => {
    if (!Array.isArray(data) || !dataKey) {
      return [];
    }
    return data.map((a) => a[dataKey]);
  };

  return (
    <View style={[containerStyle, styles.container]}>
      <ViewRow style={styles.itemCenter}>
        <Icon
          type={iconType}
          name={iconName}
          color="#fff"
          style={styles.icon}
          size={35}
        />
        <TextBody color="white" bold style={styles.textTitle}>
          {title}
        </TextBody>
      </ViewRow>
      <Spinner
        style={styles.spinner}
        isVisible={loading}
        size={100}
        type="Circle"
        color={'#fff'}
      />
      {dataGenerated().length > 0 && !loading && (
        <Animatable.View
          style={[styles.flexOne]}
          animation="fadeIn"
          duration={500}>
          <ViewRow style={styles.flexOne}>
            <YAxis
              data={dataGenerated()}
              contentInset={contentInset}
              svg={{
                fill: '#fff',
                fontSize: 10,
              }}
              numberOfTicks={numOfTicks}
              formatLabel={(value) => `${value}`}
            />
            <LineChart
              style={styles.lineChart}
              data={dataGenerated()}
              svg={{stroke: '#fff'}}
              {...(bezier && {curve: shape.curveNatural})}
              gridMin={gridMin}
              numberOfTicks={numOfTicks}
              gridMax={gridMax}
              contentInset={contentInset}>
              <Grid svg={{stroke: '#6d6d6d1a'}} />
            </LineChart>
          </ViewRow>
          {children}
        </Animatable.View>
      )}
    </View>
  );
};

CardStats.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array.isRequired,
  dataKey: PropTypes.string.isRequired,
  containerStyle: ViewPropTypes.style,
  title: PropTypes.string,
};

export default CardStats;
