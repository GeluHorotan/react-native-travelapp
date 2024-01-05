import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface ITitle {
  text: string;
  style?: any;
}

const Title: FC<ITitle> = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

Title.defaultProps = {
  text: 'Default Text',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#4681A3',
    fontWeight: 'bold',
  },
});

export default Title;
