import { StyleSheet } from "react-native";
import { colors } from "../../res/colors";
import { wp } from "../../utils/Constants";

export const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow color for iOS
        shadowOffset: { width: 0, height: 5 }, // Shadow offset (left/right, up/down)
        shadowOpacity: 0.3, // Shadow transparency
        shadowRadius: 10, // How blurry the shadow is
        borderBottomColor:colors.WHITE,
        borderBottomWidth:0.5,
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        overflow: 'hidden',
      },
    textWrapper: {
        width:wp(60),height:wp(28),justifyContent:"center",backgroundColor:colors.DARK_GREEN,borderTopRightRadius:wp(5),borderBottomRightRadius:wp(5)
    },
    imageArrow:{
        width:wp(8),height:wp(8),marginLeft:wp(5)
    },
    imgBackground:{
        width:wp(40),height:wp(28),justifyContent:"center",alignItems:"flex-end"
    },
    categoryText: {
      flex: 1,
      fontSize: 18,
      marginLeft: 15,
    },
    expandIcon: {
      fontSize: 16,
    },
    subCategoryText: {
      paddingLeft: 80,
      paddingVertical: 10,
      fontSize: 16,
      backgroundColor: '#ececec',
    },
  });