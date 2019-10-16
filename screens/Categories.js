// @flow

import * as React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { Button, Text } from 'native-base';
import { defaultStyles } from '../styles/defaultStyles';
import { CATEGORIES } from '../data/dummyData';
import colors from '../constants/colors';

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
          navigation.navigate('CategoryMeals', { categoryId: item.id });
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

const determineDevice = (iosOption, androidOption): string => {
  if (Platform.OS === 'ios') {
    return iosOption;
  }
  return androidOption;
};

Categories.navigationOptions = {
  title: 'All Categories',
  headerTintColor: determineDevice(colors.primary, 'white'),
  headerStyle: {
    backgroundColor: determineDevice('white', colors.primary),
  },
};

export default Categories;
