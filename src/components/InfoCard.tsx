import React, { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface IInfoCard {
  icon: any;
  text: string;
  style?: string;
}

const InfoCard: FC<IInfoCard> = ({ icon, text, style }) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.icon} />
      <Text style={[styles.title]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 12,
    color: '#000',
    marginHorizontal: 8,
  },
});

export default InfoCard;
