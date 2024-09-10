/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {Alert, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../res/images';
import {colors} from '../../res/colors';
import {wp} from '../../utils/Constants';
import {fonts} from '../../res/fonts';

/* eslint-disable react-native/no-inline-styles */
export const Header = props => {
  return (
    <View
      className={'flex-row justify-between bg-white px-4 w-full'}
      style={style.boxShadow}>
      {props.isBack ? (
        <TouchableOpacity
          onPress={() => {
            props.onBack()
          }}>
          <FastImage
            style={{alignSelf: 'center'}}
            source={images.back_ic}
            className={'w-9 h-9 mt-1'}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            console.log('home');
          }}>
          <FastImage
            style={{alignSelf: 'center'}}
            source={images.logo_ic}
            className={'w-44 h-10 mt-1'}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {props.isBack && (
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontFamily: fonts.REGULAR, fontSize: wp(4.5),marginTop:-wp(3)}}>
            {'Category'}
          </Text>
        </View>
      )}

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('search');
          }}>
          <FastImage
            style={{alignSelf: 'center'}}
            source={images.search_ic}
            className={'w-14 h-14'}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Alert.alert('cart');
          }}>
          <FastImage
            style={{alignSelf: 'center'}}
            source={images.shopping_bag}
            className={'w-6 h-6 mt-2'}
            resizeMode="contain"
          />
          <View className={'w-5 h-5'} style={style.cartCountContainer}>
            <Text style={{textAlign:"center",alignSelf:"center"}}>1</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const style = StyleSheet.create({
  boxShadow: {
    overflow: 'hidden',
    elevation: 5,
    // iOS shadow
    shadowColor: colors.BLACK,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 5,
    shadowRadius: 2,
    borderBottomWidth: wp(0.2),
    borderColor: colors.LIGHT_GRAY,
    paddingTop: wp(2),
  },
  wrapperContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    borderWidth: wp(0.3),
    marginTop: -4,
  },
  cartCountContainer:{
    backgroundColor:colors.DARK_GRAY,borderRadius:wp(4),position:"absolute",marginLeft:wp(2)
  }
});
