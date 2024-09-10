/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable quotes */
/* eslint-disable no-undef */

import {
  View,
  SafeAreaView,
  Animated,
  TouchableOpacity,
  Text,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import {Header} from '../../components/Header';
import {colors} from '../../res/colors';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {Spacer} from '../../res/spacer';
import {hp} from '../../utils/Constants';
import {styles} from './style';
import {images} from '../../res/images';

export default CategoryContainer = props => {
  const appReducer = useSelector(state => state.appReducer);
  const [categoryBanner, setCategoryBanner] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setCategoryBanner(appReducer?.category?.banner_image);
  }, [appReducer]);

  const onRootHome = () => {
    props.navigation.reset({
      index: 0,
      routes: [{name: 'Dashboard'}],
    });
  };

  const handleCategoryPress = categoryId => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null); // Deselect if the same category is pressed again
    } else {
      setSelectedCategory(categoryId); // Select a new category
    }
  };

  const renderCategoryItem = ({item}) => (
    <View style={{backgroundColor: colors.BLACK}}>
      <TouchableOpacity
        style={styles.categoryContainer}
        onPress={() => handleCategoryPress(item?.category_id)}>
        <View style={styles.textWrapper}>
          <Text style={{fontSize: 18, padding: 10}}>{item?.category_name}</Text>
        </View>
        <View style={{overflow: 'hidden'}}>
          <ImageBackground
            style={styles.imgBackground}
            resizeMode="cover"
            source={{uri: categoryBanner}}>
            {item?.child?.length > 0 && (
              <Image
                source={images.down_ic}
                style={styles.imageArrow}
                tintColor={colors.WHITE}
              />
            )}
          </ImageBackground>
        </View>
      </TouchableOpacity>
      {item?.category_id == selectedCategory && (
        <View style={{marginTop: 20}}>
          <FlatList
            data={
              appReducer?.category?.categories.find(
                category => category.category_id === selectedCategory,
              )?.child
            }
            renderItem={renderSubCategoryItem}
            keyExtractor={item => item.category_id}
            ListFooterComponent={<Spacer space={hp(1)} />}
          />
        </View>
      )}
    </View>
  );

  // Function to render subcategory items when a category is selected
  const renderSubCategoryItem = ({item}) => (
    <Text
      style={{color: colors.WHITE, fontSize: 16, paddingLeft: 20, padding: 5}}>
      {item.category_name}
    </Text>
  );

  return (
    <SafeAreaView className={'flex-1 bg-white justify-center'}>
      <Header isBack={true} onBack={onRootHome} />
      <View className={'flex-1'} style={{backgroundColor: colors.WHITE}}>
        <Animated.FlatList
          bounces={false}
          ListHeaderComponent={
            <View>
              <FlatList
                data={appReducer?.category?.categories}
                renderItem={renderCategoryItem}
                keyExtractor={item => item.category_id}
              />
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={null}
          renderItem={null}
          ListFooterComponent={<Spacer space={hp(5)} />}
        />
      </View>
    </SafeAreaView>
  );
};
