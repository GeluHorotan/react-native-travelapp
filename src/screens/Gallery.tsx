import React, { FC } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

interface IGallery {
  route: any;
  navigation: any;
}

const Gallery: FC<IGallery> = ({ navigation, route }) => {
  const { images } = route?.params || {};

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={{ marginBottom: 32, paddingHorizontal: 24 }}
          data={images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.image} />
          )}
        />

        <TouchableOpacity onPress={onBack} style={styles.backContainer}>
          <Image
            source={require('../assets/back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,

    marginTop: 24,
  },

  backContainer: {
    position: 'absolute',
    margin: 32,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
});

export default Gallery;
