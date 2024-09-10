/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState, useRef} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Animated,
  SafeAreaView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {useSelector} from 'react-redux';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';
import {styles} from './style';
import {hp, wp} from '../../utils/Constants';
import {Spacer} from '../../res/spacer';
import {colors} from '../../res/colors';
import {Header} from '../../components/Header';
import {fonts} from '../../res/fonts';
import {images} from '../../res/images';

export default HomeContainer = () => {
  const appReducer = useSelector(state => state.appReducer);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  useEffect(() => {
    setSliderItems(
      appReducer?.top_data?.main_sticky_menu?.length > 0
        ? appReducer?.top_data?.main_sticky_menu[0]?.slider_images
        : [],
    );
  }, [appReducer]);

  const renderImage = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{alignSelf: 'flex-start', backgroundColor: colors.WHITE}}
        key={index}
        onPress={() => {
          sliderRef.current.snapToItem(index + 1, true);
        }}>
        <ImageBackground
          source={{uri: item?.image}}
          style={{
            ...styles.slider_image,
            width: wp(74) + wp(2) * 2,
            justifyContent: 'flex-end',
          }}
          resizeMode={FastImage.resizeMode.stretch}>
          <View style={styles.sliderContainer}>
            <Text style={{fontFamily: fonts.SEMI_BOLD, fontSize: wp(4)}}>
              {item?.title}
            </Text>
            <Text
              className={'mt-4'}
              style={{fontFamily: fonts.SEMI_BOLD, fontSize: wp(3)}}>
              {item?.cta}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderCombineImage = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        key={index}
        onPress={() => {
          sliderRef.current.snapToItem(index + 1, true);
        }}>
        <ImageBackground
          source={{uri: item?.image}}
          style={{
            ...styles.slider_image,
            borderRadius: 0,
            height: hp(40),
            width: wp(56) + wp(8) * 2,
          }}
          resizeMode={FastImage.resizeMode.stretch}></ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderBoutiqCollection = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{alignSelf: 'flex-start'}}
        key={index}
        onPress={() => {
          sliderRef.current.snapToItem(index + 1, true);
        }}>
        <ImageBackground
          source={{uri: item?.banner_image}}
          style={{
            ...styles.slider_image,
            borderRadius: 0,
            height: hp(50),
            justifyContent: 'flex-end',
          }}
          resizeMode={FastImage.resizeMode.stretch}>
          <View style={styles.bottomOverlay}>
            <Text
              className={'ml-4'}
              style={{
                color: colors.WHITE,
                fontSize: wp(7),
                fontFamily: fonts.SEMI_BOLD,
              }}>
              {item.name}
            </Text>
            <Text
              className={'ml-4 mt-4 mb-4'}
              style={{
                color: colors.WHITE,
                fontSize: wp(4),
                fontFamily: fonts.SEMI_BOLD,
              }}>
              {item.cta}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.renderWrapContainer}
      onPress={() => {
        setSliderItems(item?.slider_images);
      }}>
      <View style={styles.imageContainer}>
        <FastImage
          source={{uri: item?.image}}
          fallback
          defaultSource={images.item_ic}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text
        className={'self-center text-center mt-1 mb-1'}
        style={styles.txtSubTitle}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  );

  const renderMutlipleItem = ({item, index, lastlength, firstlength}) =>
    index >= firstlength &&
    index < lastlength && (
      <TouchableOpacity
        activeOpacity={0.7}
        className={'bg-white mx-2'}
        style={{backgroundColor: item?.tint_color || '#FFF'}}>
        <View style={styles.cardWrapperContainer}>
          <FastImage
            source={{uri: item?.image}}
            style={styles.card_image}
            resizeMode="cover"
            defaultSource={images.item_ic}
          />
        </View>
        <View className={'flex-col pb-2 pl-2'} style={{width: wp(32)}}>
          <Text
            className={'text-left mt-2'}
            numberOfLines={1}
            style={{
              ...styles.txtSubTitle,
              fontSize: wp(4),
              color: colors.GRAY_SCALE_LIGHT_SUBTITLE,
            }}>
            {item?.name}
          </Text>
          <Text
            className={'text-left mt-2'}
            numberOfLines={1}
            style={{
              ...styles.txtSubTitle,
              color: colors.GRAY_SCALE_LIGHT_SUBTITLE,
            }}>
            {'+ Explore'}
          </Text>
        </View>
      </TouchableOpacity>
    );

  const renderRounfMutlipleItem = ({item, index, lastlength, firstlength}) =>
    index >= firstlength &&
    index < lastlength && (
      <TouchableOpacity activeOpacity={0.7} className={'bg-white mx-2'}>
        <View style={styles.cardWrapperContainer}>
          <ImageBackground
            source={{uri: item?.image}}
            style={{
              ...styles.card_image,
              borderRadius: wp(20),
              overflow: 'hidden',
              justifyContent: 'flex-end',
            }}
            resizeMode="cover"
            defaultSource={images.item_ic}>
            <View style={styles.overlay} />
            <Text
              className={'text-left mb-8'}
              numberOfLines={1}
              style={{
                ...styles.txtSubTitle,
                fontSize: wp(4.4),
                width: wp(30),
                color: colors.WHITE,
                textAlign: 'center',
                alignSelf: 'center',
                textTransform: 'uppercase',
              }}>
              {item?.name}
            </Text>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );

  return (
    <SafeAreaView className={'flex-1 bg-white'}>
      {appReducer?.top_data.length == 0 ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={colors.DARK_GREEN} />
        </View>
      ) : (
        <>
          <Header />
          <View className={'flex-1'} style={{backgroundColor: colors.WHITE}}>
            <Animated.FlatList
              bounces={false}
              ListHeaderComponent={
                <View>
                  <View className={'pl-2 pt-4 pb-3 bg-white'}>
                    <FlatList
                      data={appReducer?.top_data?.main_sticky_menu}
                      renderItem={renderItem}
                      keyExtractor={(item, index) => index.toString()}
                      horizontal
                      showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                    />
                  </View>
                  {/* <Spacer space={hp(0.6)} /> */}

                  {sliderItems.length > 0 && (
                    <View style={{backgroundColor: colors.WHITE}}>
                      <Carousel
                        ref={sliderRef}
                        data={sliderItems}
                        renderItem={renderImage}
                        sliderWidth={wp(100)}
                        itemWidth={wp(75) + wp(1) * 2}
                        hasParallaxImages={true}
                        firstItem={0}
                        inactiveSlideScale={0.84}
                        inactiveSlideOpacity={0.7}
                        loop={true}
                        loopClonesPerSide={2}
                        autoplay={false}
                        currentIndex={activeSlideIndex}
                        autoplayDelay={1000}
                        onSnapToItem={index => setActiveSlideIndex(index)}
                        enableMomentum={true}
                        decelerationRate={0.1}
                      />
                    </View>
                  )}

                  <>
                    <View className={'pl-2 pt-4 pb-2 bg-white'}>
                      <Text style={styles.txtTitle} className={'ml-2'}>
                        Shop By Category
                      </Text>
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.middle_data?.shop_by_category}
                        renderItem={({item, index}) =>
                          renderMutlipleItem({
                            item,
                            index,
                            lastlength: 3,
                            firstlength: 0,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.middle_data?.shop_by_category}
                        renderItem={({item, index}) =>
                          renderMutlipleItem({
                            item,
                            index,
                            lastlength: 6,
                            firstlength: 3,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                    </View>
                  </>

                  <>
                    <View className={'pl-2 pt-2 pb-4 bg-white'}>
                      <Text style={styles.txtTitle} className={'ml-2'}>
                        Shop By Fabric
                      </Text>
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.middle_data?.shop_by_fabric}
                        renderItem={({item, index}) =>
                          renderRounfMutlipleItem({
                            item,
                            index,
                            lastlength: 3,
                            firstlength: 0,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.middle_data?.shop_by_fabric}
                        renderItem={({item, index}) =>
                          renderRounfMutlipleItem({
                            item,
                            index,
                            lastlength: 6,
                            firstlength: 3,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                    </View>
                    <Spacer space={hp(0.6)} />
                  </>

                  {appReducer?.middle_data?.Unstitched?.length > 0 && (
                    <View className={'pb-4 pl-2 bg-white'}>
                      <Text style={styles.txtTitle} className={'ml-2 mb-4'}>
                        Unstitched
                      </Text>
                      <View style={{backgroundColor: colors.WHITE}}>
                        <Carousel
                          ref={sliderRef}
                          data={appReducer?.middle_data?.Unstitched}
                          renderItem={renderCombineImage}
                          sliderWidth={wp(100)}
                          itemWidth={wp(60) + wp(4) * 2}
                          hasParallaxImages={true}
                          firstItem={0}
                          inactiveSlideScale={0.88}
                          inactiveSlideOpacity={1}
                          loop={true}
                          autoplay={false}
                          currentIndex={activeSlideIndex}
                          autoplayDelay={1000}
                          onSnapToItem={index => setActiveSlideIndex(index)}
                          enableMomentum={true}
                          decelerationRate={0.1}
                        />
                      </View>
                    </View>
                  )}

                  {appReducer?.middle_data?.boutique_collection?.length > 0 && (
                    <>
                      <Spacer space={hp(0.6)} />
                      <Text
                        style={styles.txtTitle}
                        className={'ml-2 pl-2 mb-4'}>
                        Boutique collection
                      </Text>
                      <Carousel
                        ref={sliderRef}
                        data={appReducer?.middle_data?.boutique_collection}
                        renderItem={renderBoutiqCollection}
                        sliderWidth={wp(100)}
                        itemWidth={wp(100)}
                        hasParallaxImages={true}
                        firstItem={0}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={0.7}
                        loop={false}
                        autoplay={false}
                        currentIndex={activeSlideIndex}
                        autoplayDelay={1000}
                        onSnapToItem={index => setActiveIndex(index)}
                        enableMomentum={true}
                        decelerationRate={0.1}
                      />

                      <Pagination
                        dotsLength={
                          appReducer?.middle_data?.boutique_collection?.length
                        }
                        activeDotIndex={activeIndex}
                        containerStyle={styles.paginationContainer}
                        dotStyle={styles.dot}
                        inactiveDotStyle={styles.inactiveDot}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                      />
                    </>
                  )}

                  <>
                    <View className={'pl-2 pt-2 pb-4 bg-white'}>
                      <Text style={styles.txtTitle} className={'ml-2'}>
                        Range Of Pattern
                      </Text>
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.last_data?.range_of_pattern}
                        renderItem={({item, index}) =>
                          renderRounfMutlipleItem({
                            item,
                            index,
                            lastlength: 3,
                            firstlength: 0,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                      <Spacer space={hp(0.6)} />
                      <FlatList
                        data={appReducer?.last_data?.range_of_pattern}
                        renderItem={({item, index}) =>
                          renderRounfMutlipleItem({
                            item,
                            index,
                            lastlength: 6,
                            firstlength: 3,
                          })
                        }
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false} // Hide the scroll indicator if desired
                      />
                    </View>
                    <Spacer space={hp(0.6)} />
                  </>
                </View>
              }
              showsVerticalScrollIndicator={false}
              data={null}
              renderItem={null}
              ListFooterComponent={<Spacer space={hp(5)} />}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
