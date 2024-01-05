import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';

const Home: FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{ fontWeight: 'normal' }} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subtitle} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
    marginBottom: 34,
  },
});

export default Home;
