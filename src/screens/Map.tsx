import React, { FC } from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';

interface IMap {
  navigation: any;
  route: any;
}

const Map: FC<IMap> = ({ navigation, route }) => {
  const { item } = route?.params || {};
  const coords = {
    latitude: item?.coordinates?.lat,
    longitude: item?.coordinates?.lon,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={coords}>
        <Marker title={item?.name} coordinate={coords} />
      </MapView>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Image source={require('../assets/back.png')} style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title} onPress={onBack}>
          {item?.name}, {item?.city}
        </Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    color: '#000',
    fontSize: 20,
  },
  back: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: width - 48,
    margin: 24,
    padding: 16,
  },
});

export default Map;
