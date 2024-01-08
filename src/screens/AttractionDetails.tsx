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

interface IAttractionDetails {
  route?: any;
  navigation?: any;
}

const AttractionDetails: FC<IAttractionDetails> = ({ route, navigation }) => {
  const { item } = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const onBack = () => {
    navigation.goBack();
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

        <View style={styles.footer}>
          {item?.images?.length
            ? item?.images?.map(image => (
                <Image
                  key={image}
                  style={styles.miniImage}
                  source={{ uri: image }}
                />
              ))
            : null}
        </View>
      </ImageBackground>

      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

const { height } = Dimensions.get('window');

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
    backgroundColor: 'rgba(255,255,255,0.35)',
    margin: 16,
    paddingHorizontal: 8,
  },
  miniImage: {
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: 10,
  },
});

export default AttractionDetails;
