import React, { FC } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface ICategories {
  categories: string[];
  selectedCategory: string;
}

const Categories: FC<ICategories> = ({ categories, selectedCategory }) => {
  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({ item, index }) => {
        const selected = selectedCategory === item;
        return (
          <View
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text style={[styles.item, selected ? styles.selectedItem : {}]}>
              {item}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 12,
    color: 'rgba(0,0,0, 0.5)',
    fontWeight: '600',
    paddingVertical: 2,
  },
  selectedItem: {
    color: '#000000',
  },
  itemContainer: {
    marginRight: 17,
    marginVertical: 14,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 1,
  },
});

export default React.memo(Categories);
