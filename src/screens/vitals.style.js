import {StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  safeareaview: {height: '100%', backgroundColor: colors.white},
  topBg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.25,
  },
  container: {marginTop: height * 0.011, marginHorizontal: 20},
  textGreeting: {marginTop: height * 0.011, marginBottom: 15},
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.035,
  },
  cardWidth: {width: '48%'},
  faceContainer: {
    backgroundColor: colors.greyTransparent,
    width: '100%',
    height: height * 0.23,
    marginTop: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mb10: {marginBottom: 10},
  noData: {textAlign: 'center', marginTop: 20},
  scroll: {
    marginTop: height * 0.02,
    paddingBottom: height * 0.15,
    borderRadius: 20,
  },
});
