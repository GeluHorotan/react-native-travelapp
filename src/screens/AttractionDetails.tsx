import React, { FC } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
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
        imageStyle={{ borderRadius: 20 }}
      />
      <Text onPress={onBack} style={{ margin: 32 }}>
        BACK
      </Text>
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
  },
});

export default AttractionDetails;
