import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {ViewRow} from './views';
import {TextBody, TextBig, AnimatableTextBig} from './texts';
import Spinner from 'react-native-spinkit';
import {Icon} from 'react-native-elements';
import colors from '../styles/colors';
import * as Animatable from 'react-native-animatable';
import styles from './cardmeasure.style';

const {width} = Dimensions.get('window');

const CardMeasure = (props) => {
  const {
    children,
    iconName,
    iconType,
    title,
    textExplainer,
    onPress,
    hideExplainer = false,
  } = props;
  return (
    <TouchableOpacity style={styles.measureContainer} onPress={onPress}>
      <ViewRow style={styles.measureRowContainer}>
        <ViewRow style={styles.measureLeft}>
          <Icon
            name={iconName}
            type={iconType}
            color={colors.primary}
            size={width * 0.08}
          />
          <TextBody bold style={styles.measureTitle} size="base">
            {title}
          </TextBody>
        </ViewRow>
        <Animatable.View
          animation={!hideExplainer ? 'fadeInRight' : 'fadeOutRight'}
          style={{
            ...styles.measureNoData,
            width: width * 0.6,
          }}>
          <TextBody color="white" size="base" style={styles.measureNoDataText}>
            {textExplainer}
          </TextBody>
        </Animatable.View>
        <ViewRow style={styles.measureChild}>{children}</ViewRow>
      </ViewRow>
    </TouchableOpacity>
  );
};

const CardMeasureSpinner = ({
  loading = false,
  widthSize = width * 0.17,
  style = styles.spinnerDefault,
}) =>
  loading ? (
    <Spinner
      style={style}
      isVisible={true}
      size={widthSize}
      type="Circle"
      color={colors.primary}
    />
  ) : null;

export const CardMeasureBody = (props) => {
  const {temperature = 0, loading = false, onPress} = props;
  return (
    <CardMeasure
      onPress={onPress}
      title="Body"
      iconName="thermometer"
      iconType="font-awesome"
      loading={loading}
      hideExplainer={temperature || loading}
      textExplainer={'Wear Thermometer to view Temperature'}>
      <CardMeasureSpinner loading={loading} />
      <ViewRow style={styles.thermometerItemContainer}>
        <AnimatableTextBig
          color={temperature ? 'primary' : 'grey'}
          show={temperature}
          size="xl">
          {temperature}
        </AnimatableTextBig>
        <TextBody
          style={styles.textUnit}
          color={temperature ? 'grey' : 'primary'}>
          ºF
        </TextBody>
      </ViewRow>
    </CardMeasure>
  );
};

export const CardMeasureBlood = (props) => {
  const {systolic = 0, diastolic = 0, loading = false, onPress} = props;
  const showText = systolic && diastolic;
  return (
    <CardMeasure
      onPress={onPress}
      title="Blood"
      iconName="water"
      iconType="ionicon"
      loading={loading}
      hideExplainer={showText || loading}
      textExplainer={
        <>
          {'Wear '}
          <TextBody size="base" color="white" bold>
            Part 2
          </TextBody>
          {'\nto view Blood Press'}
        </>
      }>
      <CardMeasureSpinner loading={loading} />
      <ViewRow style={styles.thermometerItemContainer}>
        <AnimatableTextBig
          style={styles.textValueRight}
          color={showText ? 'primary' : 'grey'}
          show={showText}
          size="xl">
          {!showText ? (
            0
          ) : (
            <>
              {systolic}/
              <TextBig size="xl" color={showText ? 'teal' : 'grey'}>
                {diastolic}
              </TextBig>
            </>
          )}
        </AnimatableTextBig>
        <TextBody
          style={styles.textUnit}
          size="small"
          color={showText ? 'grey' : 'primary'}>
          mmHg
        </TextBody>
      </ViewRow>
    </CardMeasure>
  );
};

export const CardMeasureOximeter = (props) => {
  const {sp02 = 0, pulse_rate = 0, loading = false, onPress} = props;
  const showText = sp02 && pulse_rate;
  return (
    <CardMeasure
      onPress={onPress}
      title="sp02"
      iconName="heartbeat-alt"
      iconType="fontisto"
      loading={loading}
      hideExplainer={showText || loading}
      textExplainer={
        <>
          {'Wear '}
          <TextBody size="base" color="white" bold>
            Part 3
          </TextBody>
          {'\nto view Sp02 and PB'}
        </>
      }>
      <ViewRow
        style={[
          styles.oximeterContainer,
          loading && styles.oximeterContainerLoading,
        ]}>
        <ViewRow style={styles.alignEnd}>
          <CardMeasureSpinner
            loading={loading}
            style={styles.spinnerOximeter}
            widthSize={width * 0.08}
          />
          <AnimatableTextBig
            color={showText ? 'primary' : 'grey'}
            show={showText}
            size="xl">
            {sp02}
          </AnimatableTextBig>
          <TextBody
            style={styles.textUnit}
            size="small"
            color={showText ? 'grey' : 'primary'}>
            %
          </TextBody>
        </ViewRow>
        <TextBody
          style={styles.oximeterTextMiddle}
          size="small"
          bold
          color={showText ? 'grey' : 'primary'}>
          PR
        </TextBody>
        <ViewRow style={styles.alignEnd}>
          <CardMeasureSpinner
            loading={loading}
            style={styles.spinnerOximeter}
            widthSize={width * 0.08}
          />
          <AnimatableTextBig
            style={styles.textValueRight}
            color={showText ? 'primary' : 'grey'}
            show={showText}
            size="xl">
            {pulse_rate}
          </AnimatableTextBig>
          <TextBody
            style={styles.textUnit}
            size="small"
            color={showText ? 'grey' : 'primary'}>
            bpm
          </TextBody>
        </ViewRow>
      </ViewRow>
    </CardMeasure>
  );
};

export default CardMeasure;
