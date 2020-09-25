import React from 'react';
import {FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import moment from 'moment';
import {TextBody} from './texts';
import colors from '../styles/colors';

const dates = [
  {day: 'Mon', date: '2020-07-27'},
  {day: 'Tue', date: '2020-07-28'},
  {day: 'Wed', date: '2020-07-29'},
  {day: 'Thu', date: '2020-07-30'},
  {day: 'Fri', date: '2020-07-31'},
  {day: 'Sat', date: '2020-08-01'},
  {day: 'Sun', date: '2020-08-02'},
];

const styles = StyleSheet.create({
  flatlistStyle: {backgroundColor: colors.greyTransparent, borderRadius: 15},
  container: {
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
  },
  textCenter: {textAlign: 'center'},
  textDate: {
    marginTop: 10,
    borderRadius: 18,
    textAlign: 'center',
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDateActive: {
    marginTop: 10,
    backgroundColor: colors.primary,
    color: colors.white,
  },
});

const DateSelector = (props) => {
  const {selectedDate, setSelectedDate} = props;
  return (
    <FlatList
      data={dates}
      style={styles.flatlistStyle}
      keyExtractor={(item) => item.date}
      contentContainerStyle={styles.container}
      horizontal
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => setSelectedDate(item.date)}>
            <TextBody style={styles.textCenter} size="small" color="greySoft">
              {item.day}
            </TextBody>
            <View
              style={[
                styles.textDate,
                selectedDate === item.date && styles.textDateActive,
              ]}>
              <TextBody
                size="small"
                color={selectedDate === item.date ? 'white' : 'grey'}>
                {moment(item.date).format('DD')}
              </TextBody>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default DateSelector;
