// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { defaultStyles } from '../styles/defaultStyles';
import { CATEGORIES } from '../data/dummyData';

type CategoryMealsProps = {
  navigation: Object,
};

const CategoryMeals = ({ navigation }: CategoryMealsProps): React.Node => {
  const catId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(item => item.id === catId);
  return (
    <View style={defaultStyles.centeredScreen}>
      <Text>Category Meals Screen</Text>

      <Button
        success
        onPress={() => {
          navigation.navigate('MealsDetails');
        }}
      >
        <Text>Go to Meal</Text>
      </Button>
    </View>
  );
};

CategoryMeals.navigationOptions = ({ navigation }: Object): Object => ({
  title: CATEGORIES.find(item => item.id === navigation.getParam('categoryId'))
    .title,
});

export default CategoryMeals;
