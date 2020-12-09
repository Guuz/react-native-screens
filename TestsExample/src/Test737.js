import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {KeyboardAvoidingView, Text, View} from 'react-native';
import {createStackNavigator, useHeaderHeight} from '@react-navigation/stack';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

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
