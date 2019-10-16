// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { defaultStyles } from '../styles/defaultStyles';

type CategoryMealsProps = {
  navigation: Object,
};

const CategoryMeals = ({ navigation }: CategoryMealsProps): React.Node => {
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

export default CategoryMeals;
