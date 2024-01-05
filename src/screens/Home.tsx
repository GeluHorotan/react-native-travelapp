import React, { FC, useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Title from '../components/Title';
import Categories from '../components/Categories';
import AttractionCard from '../components/AttractionCard';
import jsonData from '../data/attractions.json';

const Home: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        style={{ flexGrow: 1 }}
        ListHeaderComponent={
          <>
            <View style={{ margin: 32 }}>
              <Title text="Where do" style={{ fontWeight: 'normal' }} />
              <Title text="you want to go?" />

              <Title text="Explore Attractions" style={styles.subtitle} />
            </View>

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
          </>
        }
        data={data}
        keyExtractor={item => String(item?.id)}
        renderItem={({ item, index }) => (
          <AttractionCard
            key={item?.id}
            subtitle={item?.city}
            title={item?.name}
            imageSrc={item.images?.length ? item.images[0] : null}
            style={
              index % 2 === 0
                ? { marginRight: 12, marginLeft: 32 }
                : { marginRight: 32 }
            }
          />
        )}
      />
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
});

export default Home;
