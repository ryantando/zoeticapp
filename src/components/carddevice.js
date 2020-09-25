import React from 'react';
import CardStats from './cardstats';
import colors from '../styles/colors';
import {ViewRow} from './views';
import {TextBig, TextBody} from './texts';
import {Dimensions, StyleSheet, View} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  thermometerContainer: {
    backgroundColor: colors.magenta,
    height: height * 0.23,
  },
  thermometerItemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  thermometerText: {marginBottom: -10},
  bloodContainer: {
    backgroundColor: colors.teal,
    height: height * 0.32,
  },
  oximeterContainer: {
    backgroundColor: colors.teal,
    height: height * 0.32,
    marginTop: 20,
  },
  bloodItemContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginHorizontal: 10,
  },
  marginRight10: {marginRight: 2},
  bloodTextData: {marginBottom: 30, marginRight: -5},
  bloodTextItemContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bloodTextUnit: {marginTop: -5, marginRight: -15},
  oximeterItemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  oximeterItemData: {marginBottom: -10},
});

export const CardThermometer = (props) => {
  const {data, summary, loading = false} = props;
  return (
    <CardStats
      data={data}
      dataKey="temperature"
      title="Temperature"
      iconName="thermometer"
      iconType="font-awesome"
      loading={loading}
      containerStyle={styles.thermometerContainer}>
      <ViewRow style={styles.thermometerItemContainer}>
        <TextBig style={styles.thermometerText} color="white" size="xl">
          {summary}
        </TextBig>
        <TextBody color="white">ºF</TextBody>
      </ViewRow>
    </CardStats>
  );
};

export const CardOximeter = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {data, sp02, pulse_rate, loading = false} = props;
  return (
    <CardStats
      data={dateTemporary}
      dataKey="a"
      title="Oximeter"
      iconName="heartbeat-alt"
      iconType="fontisto"
      gridMin={76}
      gridMax={79}
      bezier={false}
      loading={loading}
      containerStyle={styles.oximeterContainer}>
      <ViewRow>
        <View>
          <TextBody style={styles.oximeterItemData} color="white">
            SpO2
          </TextBody>
          <ViewRow style={styles.oximeterItemContainer}>
            <TextBig style={styles.thermometerText} color="white" size="xl">
              {sp02}
            </TextBig>
            <TextBody color="white" size="small">
              %
            </TextBody>
          </ViewRow>
        </View>
        <View>
          <TextBody style={styles.oximeterItemData} color="white">
            PR
          </TextBody>
          <ViewRow style={styles.oximeterItemContainer}>
            <TextBig style={styles.thermometerText} color="white" size="xl">
              {pulse_rate}
            </TextBig>
            <TextBody color="white" size="small">
              bpm
            </TextBody>
          </ViewRow>
        </View>
      </ViewRow>
    </CardStats>
  );
};

export const CardBlood = (props) => {
  const {data, systolic, diastolic, loading = false} = props;
  return (
    <CardStats
      data={data}
      dataKey="systolic"
      title="Blood"
      iconName="water"
      iconType="ionicon"
      gridMin={100}
      gridMax={135}
      loading={loading}
      containerStyle={styles.bloodContainer}>
      <ViewRow style={styles.bloodItemContainer}>
        <TextBig style={styles.bloodTextData} color="white" size="xl">
          {systolic}
        </TextBig>
        <View style={styles.bloodTextItemContainer}>
          <ViewRow>
            <TextBig style={styles.marginRight10} color="white" size="l">
              /
            </TextBig>
            <TextBig color="red" size="l">
              {diastolic}
            </TextBig>
          </ViewRow>
          <TextBody style={styles.bloodTextUnit} color="white" size="medium">
            mmHg
          </TextBody>
        </View>
      </ViewRow>
    </CardStats>
  );
};

const dateTemporary = [
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 78},
  {a: 73},
  {a: 78},
  {a: 73},
  {a: 79},
  {a: 72},
  {a: 79},
  {a: 73},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 78},
  {a: 72},
  {a: 78},
  {a: 73},
  {a: 79},
  {a: 72},
  {a: 79},
  {a: 72},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
  {a: 75},
];
