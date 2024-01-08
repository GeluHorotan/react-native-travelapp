import React, { FC } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  Pressable,
} from 'react-native';
import Title from '../components/Title';
import InfoCard from '../components/InfoCard';

interface IAttractionDetails {
  route?: any;
  navigation?: any;
}

const AttractionDetails: FC<IAttractionDetails> = ({ route, navigation }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const onBack = () => {
    navigation.goBack();
  };

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', { images: item?.images });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.mainImage}
        source={{ uri: mainImage }}
        imageStyle={{ borderRadius: 20 }}>
        <View style={styles.header}>
          <Pressable onPress={onBack} hitSlop={8}>
            <Image style={styles.icon} source={require('../assets/back.png')} />
          </Pressable>
          <Pressable hitSlop={8}>
            <Image
              style={styles.icon}
              source={require('../assets/share.png')}
            />
          </Pressable>
        </View>

        <Pressable onPress={onGalleryNavigate} style={styles.footer}>
          {slicedImages?.map((image: string, index: number) => (
            <View key={image}>
              <Image style={styles.miniImage} source={{ uri: image }} />
              {diffImages > 0 && index === slicedImages?.length - 1 ? (
                <View style={styles.moreImagesContainer}>
                  <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                </View>
              ) : null}
            </View>
          ))}
        </Pressable>
      </ImageBackground>
      <View style={styles.headerContainer}>
        <View>
          <Title style={styles.title} text={item?.name} />
          <Text style={styles.city}>{item?.city}</Text>
        </View>
        <Title style={styles.title} text={item?.entry_price} />
      </View>
      <InfoCard
        icon={require('../assets/location_circle.png')}
        text={item?.address}
      />
      <InfoCard
        icon={require('../assets/schedule.png')}
        text={`OPEN
${item?.opening_time} - ${item?.closing_time}`}
      />
    </SafeAreaView>
  );
};

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  mainImage: {
    width: '100%',
    height: height / 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.45)',
    margin: 16,
    paddingHorizontal: 8,
  },
  miniImage: {
    width: 40,
    height: 40,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 10,
  },
  moreImagesContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',
    width: 40,
    height: 40,
    top: 8,
    left: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 40,
  },
  title: {
    color: '#000',
  },
  city: {
    fontSize: 20,
    color: '#000',
    marginTop: 8,
    fontWeight: '400',
  },
});

export default AttractionDetails;
