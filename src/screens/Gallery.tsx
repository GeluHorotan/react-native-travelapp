import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Gallery: FC = () => {
  return (
    <SafeAreaView>
      <Text>Gallery</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 32,
    flex: 1,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 40,
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
  },
});

export default Gallery;
