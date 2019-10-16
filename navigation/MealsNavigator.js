import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// import { createTabsNavigator } from 'react-navigation-tabs';
// import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/Categories';
import CategoryMealsScreen from '../screens/CategoryMeals';
import MealsDetailsScreen from '../screens/MealDetails';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealsDetails: MealsDetailsScreen,
});

export default createAppContainer(MealsNavigator);
