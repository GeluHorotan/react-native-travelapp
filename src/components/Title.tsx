import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface ITitle {
  children?: React.ReactNode;
}

const Title: FC<ITitle> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

Title.defaultProps = {
  children: 'Default Text',
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
});

export default Title;
