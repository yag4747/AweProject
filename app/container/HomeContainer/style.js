/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import {ifIphoneX, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../res/colors';
import {fonts} from '../../res/fonts';

export const styles = StyleSheet.create({
boxShadow:{
    elevation: 5,
    // iOS shadow
    shadowColor: colors.GRAY_SCALE_LIGHT,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
    borderWidth:wp(0.2)
},
  txtTitle: {
    fontSize: wp(5),
    fontFamily: fonts.SEMI_BOLD,
    color: colors.GRAY_SCALE,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,  // Fills the parent (ImageBackground)
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black color with 50% opacity
  },
  bottomOverlay: {
    height: hp(16),
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
    justifyContent:"center"
  },
  grayScaleLight:{
    fontSize: wp(3.8),
    fontFamily: fonts.REGULAR,
    color: colors.GRAY_SCALE_LIGHT,
  },
  txtSubTitle: {
    fontSize: wp(3.2),
    fontFamily: fonts.REGULAR,
    color: colors.GRAY_SCALE,
  },
  imageContainer: {
    backgroundColor: colors.GRAY_BLUE,
    borderRadius:wp(1)
  },
  sliderContainer:{
    alignSelf:"center",paddingLeft:wp(4),padding:wp(2),backgroundColor:colors.WHITE,width:wp(50),height:wp(20),marginBottom:wp(4)
  },
  renderWrapContainer:{
    borderColor:colors.LIGHT_GRAY, borderWidth: 1, marginHorizontal: wp(1),borderRadius:wp(1)
  },
  image: {
    borderTopLeftRadius:wp(1),
    borderTopRightRadius:wp(1),
    width: wp(30), // Set the desired width for each image
    height: wp(20), // Set the desired height for each image
  },
  card_image: {
    width: wp(35), // Set the desired width for each image
    height: wp(35), // Set the desired height for each image
    alignSelf: 'center',
  },
  slider_image: {
    height: hp(28),
    width: wp('100%'),
    borderRadius:wp(2),
    overflow:"hidden"
  },
  cardWrapperContainer: {
    alignSelf: 'center',
  },
  back_wrapper: {
    flexDirection: 'row',
    position: 'absolute',
    left: wp(3),
    zIndex: 1,
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() + 15,
      },
      {
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 16, // for android
      },
    ),
  },
  dotstyle: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(2),
  },
  backIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  bottom_view: {
    alignSelf: 'center',
    position: 'absolute',
    ...ifIphoneX(
      {
        bottom: getStatusBarHeight() + 15,
      },
      {
        bottom: Platform.OS === 'ios' ? getStatusBarHeight() + 10 : 16, // for android
      },
    ),
  },
  paginationContainer: {
    paddingVertical: 8,
    marginTop: wp(2)
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: colors.BLACK,
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});
