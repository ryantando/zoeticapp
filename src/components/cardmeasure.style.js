import {StyleSheet, Dimensions} from 'react-native';
import colors from '../styles/colors';

const {width, height} = Dimensions.get('window');
export default StyleSheet.create({
  measureContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    backgroundColor: colors.greyTransparent,
    borderRadius: 15,
    height: height * 0.18,
    justifyContent: 'center',
  },
  measureRowContainer: {alignItems: 'center', flex: 1, paddingHorizontal: 10},
  measureLeft: {
    marginLeft: width * 0.05,
    width: width * 0.2,
    marginRight: 20,
    alignItems: 'center',
  },
  measureTitle: {marginLeft: 10},
  measureChild: {
    flex: 1,
    alignItems: 'center',
  },
  measureNoData: {
    position: 'absolute',
    backgroundColor: `${colors.primary}c7`,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 15,
    right: 0,
    zIndex: 1,
  },
  measureNoDataText: {
    textAlign: 'center',
  },
  thermometerItemContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 10,
  },
  spinnerDefault: {alignSelf: 'flex-start', marginLeft: 20},
  spinnerOximeter: {alignSelf: 'flex-start', marginLeft: 20, marginTop: 13},
  textUnit: {marginBottom: -7},
  textValueRight: {marginRight: -30},
  alignEnd: {alignItems: 'flex-end'},
  oximeterContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginRight: 10,
    marginLeft: width * 0.1,
  },
  oximeterContainerLoading: {marginRight: 0, marginLeft: 0},
  oximeterTextMiddle: {alignSelf: 'center', marginRight: -15},
});
