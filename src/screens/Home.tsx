import React, { FC, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';
import AttractionCard from '../components/AttractionCard';

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
          ]}
        />
        <View style={styles.row}>
          <AttractionCard
            subtitle="Rome"
            title="Entertainment Park"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/London%2C_China_Town_--_2016_--_4868.jpg/1200px-London%2C_China_Town_--_2016_--_4868.jpg"
          />
          <AttractionCard
            subtitle="Rome"
            title="Entertainment Park"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/London%2C_China_Town_--_2016_--_4868.jpg/1200px-London%2C_China_Town_--_2016_--_4868.jpg"
          />
        </View>
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
  row: {
    flexDirection: 'row',
  },
});

export default Home;
