// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'native-base';
import { defaultStyles } from '../styles/defaultStyles';

type MealDetailsProps = {
  navigation: Object,
};

const MealDetails = ({ navigation }: MealDetailsProps): React.Node => {
  return (
    <View style={defaultStyles.centeredScreen}>
      <Text>Details about a specific Meal</Text>
      <Button
        success
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <Text>Go back to Categories Home</Text>
      </Button>
    </View>
  );
};

export default MealDetails;
