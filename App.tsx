import React, {useState} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';

//Importing external style

import {customStyle} from './style.ts';

export default function App() {
  [counter, setCounter] = useState(19);

  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={'#121212'} />
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Hello World</Text>
      </View>
      <View style={customStyle.lowerContainer}>
        <View style={customStyle.counter}>
          <Button title="-" />
          <Text style={customStyle.text}>{counter}</Text>
          <Button title="+" />
        </View>
      </View>
    </View>
  );
}
