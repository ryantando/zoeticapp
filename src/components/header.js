import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.06,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  flexOne: {flex: 1},
  w30: {width: 30},
});

const Header = ({
  titleStyle = {},
  title,
  withMenu = true,
  withPlus = true,
  menuIconName = 'menu',
  menuIconType = 'feather',
  menuIconColor = '#fff',
  menuOnPress,
}) => {
  return (
    <View style={styles.container}>
      {withMenu && (
        <Icon
          onPress={menuOnPress}
          type={menuIconType}
          name={menuIconName}
          color={menuIconColor}
          size={30}
        />
      )}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {withPlus ? (
        <Icon type="feather" name="plus" color="#fff" size={30} />
      ) : (
        <View style={styles.w30} />
      )}
    </View>
  );
};

export default Header;
