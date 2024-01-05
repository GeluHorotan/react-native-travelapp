import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{ fontWeight: 'normal' }} />
        <Title text="you want to go?" />

        <Title text="Explore Attractions" style={styles.subtitle} />

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
            'Others',
          ]}></Categories>
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
    marginBottom: 18,
  },
});

export default Home;
