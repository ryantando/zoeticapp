import {StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  safeareaview: {height: '100%', backgroundColor: '#fff'},
  scrollTabViewStyle: {marginTop: 20, borderBottomWidth: 0},
  scrollableTabStyle: {
    borderWidth: 0,
    borderColor: 'transparent',
  },
  tabsContainerStyle: {
    justifyContent: 'center',
    borderColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  buttonCompleteContainer: {
    position: 'absolute',
    bottom: 20,
    width: width - 40,
    marginHorizontal: 20,
    borderRadius: 15,
    height: height * 0.06,
  },
  buttonComplete: {
    height: height * 0.06,
    backgroundColor: colors.primary,
  },
  buttonTitle: {fontSize: 15, fontWeight: 'normal'},
  textNotAvail: {textAlign: 'center', marginTop: 20},
  flexOne: {flex: 1},
});
