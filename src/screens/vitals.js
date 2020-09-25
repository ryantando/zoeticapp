/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';
import moment from 'moment';

import colors from '../styles/colors';
import Header from '../components/header';
import {TextBody} from '../components/texts';
import {ViewRow} from '../components/views';
import DateSelector from '../components/dateselector';
import API from '../config/api';
import {
  CardThermometer,
  CardBlood,
  CardOximeter,
} from '../components/carddevice';
import {Icon} from 'react-native-elements';
import MeasureButton from '../components/measurebutton';
import styles from './vitals.style';

const {height} = Dimensions.get('window');

const today = '2020-07-30';

const VitalsScreen = (props) => {
  const {navigation = {}} = props;
  const [selectedDate, setSelectedDate] = useState('2020-07-30');
  const [summary, setSummary] = useState({
    blood: {},
    oximeter: {},
    thermometer: {},
  });
  const [chartData, setChartData] = useState({
    thermometer: [],
    blood: [],
    oximeter: [],
  });
  const [loading, setLoading] = useState({
    blood: false,
    oximeter: false,
    thermometer: false,
  });

  const fetchAllSummary = async () => {
    try {
      const res = await API.DeviceAPI.getDataDateSummaryAll(selectedDate);
      setSummary(res);
      return true;
    } catch (err) {
      throw false;
    }
  };

  const fetchAllChartData = async () => {
    try {
      const res = await API.DeviceAPI.getDataDateAll(selectedDate);
      setChartData(res);
      return true;
    } catch (err) {
      throw false;
    }
  };

  const setAllLoadingValue = (bool) => {
    return {blood: bool, oximeter: bool, thermometer: bool};
  };

  const fetchAll = async () => {
    setLoading(setAllLoadingValue(true));
    await fetchAllChartData();
    await fetchAllSummary();
    setLoading(setAllLoadingValue(false));
  };

  useEffect(() => {
    if (selectedDate) {
      fetchAll();
    }
  }, [selectedDate]);

  const goToMeasure = () => {
    navigation.navigate('MeasureScreen', {
      date: selectedDate,
      fetchAll,
    });
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary} />
      <SafeAreaView style={styles.safeareaview}>
        <View backgroundColor={colors.primary} style={styles.topBg} />
        <Header title="Vitals" titleStyle={{color: colors.white}} />
        <View style={styles.container}>
          <View>
            <TextBody color="white" size="large">
              {moment(today).format('MMMM DD, YYYY')}
            </TextBody>
            <TextBody
              color="white"
              size="large"
              bold
              style={styles.textGreeting}>
              How are you feeling today?
            </TextBody>
          </View>
          <ScrollView
            contentContainerStyle={styles.scroll}
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={false}>
            <DateSelector
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
            {moment(selectedDate).diff(moment(today)) > 0 ? (
              <TextBody style={styles.noData}>
                No data on {moment(selectedDate).format('MMMM DD, YYYY')}
              </TextBody>
            ) : (
              <ViewRow style={styles.statContainer}>
                <View style={styles.cardWidth}>
                  <CardThermometer
                    data={chartData.thermometer}
                    loading={loading.thermometer}
                    summary={summary.thermometer?.avgTemp?.toFixed(1) || ' '}
                  />
                  <CardOximeter
                    data={chartData.oximeter}
                    loading={loading.oximeter}
                    sp02={summary.oximeter?.avgSp02?.toFixed(0) || ' '}
                    pulse_rate={
                      summary.oximeter?.avgPulseRate?.toFixed(0) || ' '
                    }
                  />
                </View>
                <View style={styles.cardWidth}>
                  <CardBlood
                    data={chartData.blood}
                    loading={loading.blood}
                    systolic={summary.blood?.avgSystolic?.toFixed(0) || ''}
                    diastolic={summary.blood?.avgDiastolic?.toFixed(0) || ''}
                  />
                  <View style={styles.faceContainer}>
                    <Icon
                      type="font-awesome"
                      name="user-o"
                      size={height * 0.05}
                      color={colors.primary}
                      style={styles.mb10}
                    />
                    <TextBody size="small" color="primary">
                      facexxxxxxxx
                    </TextBody>
                  </View>
                </View>
              </ViewRow>
            )}
          </ScrollView>
        </View>
        <MeasureButton onPress={goToMeasure} />
      </SafeAreaView>
    </>
  );
};

export default VitalsScreen;
