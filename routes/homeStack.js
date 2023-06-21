import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Review from '../screens/Review';
import Login from '../screens/auth/Login';

const screens = {
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Reviews: {
    screen: Review,
  },
};
const HomeStack = createStackNavigator();

export default createAppContainer(HomeStack);
