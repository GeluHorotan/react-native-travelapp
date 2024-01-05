import React, { FC } from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

interface IAttractionCard {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const AttractionCard: FC<IAttractionCard> = ({ imageSrc, title, subtitle }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: imageSrc }} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <Image style={styles.icon} source={require('../assets/location.png')} />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
    padding: 4,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 15,
  },
  image: {
    width: (width - 96) / 2,
    height: 120,
    borderRadius: 15,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 12,
    marginLeft: 6,
    color: '#000',
  },
  subtitle: {
    fontSize: 10,
    fontWeight: '300',
    color: 'rgba(0,0,0,0.5)',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
  },
  row: {
    marginBottom: 12,
    marginLeft: 6,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AttractionCard;
