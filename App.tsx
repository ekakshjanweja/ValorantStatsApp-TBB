import React, {useState} from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';

//Importing external style

import {customStyle} from './style.ts';

export default function App() {
  const [counter, setCounter] = useState(19);

  const increment = () => {
    setCounter(counter => counter + 1);
  };

  const decrement = () => {
    setCounter(counter => counter - 1);
  };

  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={'#121212'} />
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Hello World</Text>
      </View>
      <View style={customStyle.lowerContainer}>
        <View style={customStyle.counterContainer}>
          <TouchableOpacity onPress={decrement}>
            <View style={customStyle.counter}>
              <Text style={customStyle.text}>-</Text>
            </View>
          </TouchableOpacity>
          <Text style={customStyle.text}>{counter}</Text>
          <TouchableOpacity onPress={increment}>
            <View style={customStyle.counter}>
              <Text style={customStyle.text}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
