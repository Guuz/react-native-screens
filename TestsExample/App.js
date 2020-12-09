/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React from 'react';
import {enableScreens} from 'react-native-screens';

import {createStackNavigator, useHeaderHeight} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

// import Test42 from './src/Test42';
// import Test111 from './src/Test111';
// import Test263 from './src/Test263';
// import Test349 from './src/Test349';
// import Test364 from './src/Test364';
// import Test528 from './src/Test528';
// import Test556 from './src/Test556';
// import Test564 from './src/Test564';
// import Test577 from './src/Test577';
// import Test619 from './src/Test619';
// import Test624 from './src/Test624';
// import Test640 from './src/Test640';
// import Test645 from './src/Test645';
// import Test648 from './src/Test648';
// import Test649 from './src/Test649';
// import Test654 from './src/Test654';
// import Test691 from './src/Test691';
// import Test702 from './src/Test702';
// import Test706 from './src/Test706';
// import Test713 from './src/Test713';
// import Test737 from './src/Test737';

enableScreens();

function HomeScreen({navigation}) {
  const headerHeight = useHeaderHeight();
  const [value, setValue] = React.useState('');

  React.useLayoutEffect(() => {
    // Disable this line to prevent the bug.
    navigation.setOptions({title: value});
    // This will also trigger the bug:
    // navigation.setOptions();
  }, [value, navigation]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={headerHeight}>
      <ScrollView>
        <Text>Spacer to push input down</Text>
        <View style={{backgroundColor: 'lightblue', height: 600, margin: 24}} />
        <TextInput
          value={value}
          onChangeText={setValue}
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: 200,
            fontSize: 24,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
