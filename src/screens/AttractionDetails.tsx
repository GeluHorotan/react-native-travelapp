import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

interface IAttractionDetails {
  route?: any;
  navigation?: any;
}

const AttractionDetails: FC<IAttractionDetails> = ({ route, navigation }) => {
  const { item } = route?.params || {};
  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Text onPress={onBack} style={{ margin: 32 }}>
        BACK
      </Text>
      <Text>{item?.name}</Text>
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

export default AttractionDetails;
