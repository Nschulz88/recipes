// @flow

import * as React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Text } from 'native-base';
import { defaultStyles } from '../styles/defaultStyles';
import { CATEGORIES } from '../data/dummyData';
import { colors } from '../constants/colors';

type CategoriesProps = {
  navigation: Object,
};

const styles = StyleSheet.create({
  gridItem: { flex: 1, margin: 15, height: 150 },
});

const Categories = ({ navigation }: CategoriesProps): React.Node => {
  const renderGridItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('CategoryMeals');
        }}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={renderGridItem}
      data={CATEGORIES}
    />
  );
};

export default Categories;
