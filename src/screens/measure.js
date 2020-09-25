import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import colors from '../styles/colors';
import Header from '../components/header';
import {TextBody} from '../components/texts';
import API from '../config/api';
import ScrollableTabView, {
  ScrollableTabBar,
} from 'react-native-scrollable-tab-view';
import {
  CardMeasureBody,
  CardMeasureBlood,
  CardMeasureOximeter,
} from '../components/cardmeasure';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './measure.style';

const VitalsScreen = (props) => {
  const {navigation = {}, route = {}} = props;
  const {fetchAll} = route?.params || {};
  const [data, setData] = useState({
    loadingtemperature: false,
    temperature: null,
    loadingblood: false,
    blood: {systolic: null, diastolic: null},
    loadingoximeter: false,
    oximeter: {sp02: null, pulse_rate: null},
  });
  const [completeLoading, setCompleteLoading] = useState(false);

  const completeDisabled =
    data.loadingtemperature ||
    data.loadingblood ||
    data.loadingoximeter ||
    !data.temperature ||
    !data.blood.diastolic ||
    !data.blood.systolic ||
    !data.oximeter.sp02 ||
    !data.oximeter.pulse_rate;

  const onSave = async () => {
    try {
      setCompleteLoading(true);
      const res = await API.DeviceAPI.postDataDeviceAll(data);
      if (res) {
        setTimeout(() => {
          setCompleteLoading(false);
          fetchAll();
          navigation.goBack();
        }, 2000);
      }
    } catch (err) {
      setCompleteLoading(false);
    }
  };

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const onGenerate = async (type) => {
    switch (type) {
      case 'temperature':
        return getRandom(95, 100);
      case 'blood':
        return {
          systolic: getRandom(116, 130),
          diastolic: getRandom(65, 80),
        };
      case 'oximeter':
        return {
          sp02: getRandom(95, 100),
          pulse_rate: getRandom(95, 100),
        };
      default:
        break;
    }
  };

  const onGenerateSave = async (type) => {
    setData((prev) => ({...prev, [`loading${type}`]: true}));
    const get = await onGenerate(type);
    setTimeout(() => {
      setData((prev) => ({...prev, [type]: get, [`loading${type}`]: false}));
    }, 2000);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView style={styles.safeareaview}>
        <Header
          title="Vitals"
          titleStyle={{color: colors.primary}}
          withPlus={false}
          menuIconColor={colors.primary}
          menuIconName="arrow-back-ios"
          menuIconType="material"
          menuOnPress={() => navigation.goBack()}
        />
        <ScrollableTabView
          style={styles.scrollTabViewStyle}
          initialPage={0}
          tabBarUnderlineStyle={{backgroundColor: colors.primary}}
          renderTabBar={() => (
            <ScrollableTabBar
              style={styles.scrollableTabStyle}
              tabsContainerStyle={styles.tabsContainerStyle}
              activeTextColor={colors.primary}
              inactiveTextColor={colors.grey}
            />
          )}>
          <View tabLabel="Vitals Kit" style={styles.flexOne}>
            <ScrollView>
              <CardMeasureBody
                loading={data.loadingtemperature}
                temperature={data.temperature || 0}
                onPress={() => onGenerateSave('temperature')}
              />
              <CardMeasureBlood
                loading={data.loadingblood}
                diastolic={data.blood?.diastolic || 0}
                systolic={data.blood?.systolic || 0}
                onPress={() => onGenerateSave('blood')}
              />
              <CardMeasureOximeter
                loading={data.loadingoximeter}
                sp02={data.oximeter?.sp02 || 0}
                pulse_rate={data.oximeter?.pulse_rate || 0}
                onPress={() => onGenerateSave('oximeter')}
              />
            </ScrollView>

            <Button
              disabled={completeDisabled}
              onPress={onSave}
              loading={completeLoading}
              containerStyle={styles.buttonCompleteContainer}
              buttonStyle={styles.buttonComplete}
              titleStyle={styles.buttonTitle}
              title="COMPLETE"
            />
          </View>
          <View tabLabel="Camera">
            <TextBody style={styles.textNotAvail}>Not available</TextBody>
          </View>
        </ScrollableTabView>
      </SafeAreaView>
    </>
  );
};

export default VitalsScreen;
