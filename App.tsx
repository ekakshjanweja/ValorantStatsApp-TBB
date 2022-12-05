import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

//Importing external style

import {customStyle} from './style.ts';

export default function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Ekaksh',
    },

    {
      id: 2,
      name: 'Stomej',
    },

    {
      id: 3,
      name: 'a',
    },

    {
      id: 4,
      name: 'b',
    },
    {
      id: 5,
      name: 'Ekaksh',
    },

    {
      id: 6,
      name: 'Stomej',
    },

    {
      id: 7,
      name: 'a',
    },

    {
      id: 8,
      name: 'b',
    },
  ]);

  const handleClick = itemId => {
    setData(prevData => {
      return prevData.filter(tempData => {
        if (tempData.id != itemId) {
          return tempData;
        }
      });
    });
  };

  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={'#121212'} />
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Hello World</Text>
      </View>
      <View style={customStyle.lowerContainer}>
        {/* <ScrollView style={customStyle.scrollViewStyle}>
          {data.map((listData, index) => {
            return (
              <View style={customStyle.listTyle} key={listData.id}>
                <Text style={customStyle.text}> {listData.id} </Text>
                <Text style={customStyle.text}> {listData.name} </Text>
              </View>
            );
          })}
        </ScrollView> */}
        <FlatList
          style={customStyle.scrollViewStyle}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => handleClick(item.id)}>
                <View style={customStyle.listStyle}>
                  <Text style={customStyle.text}>{item.id}</Text>
                  <Text style={customStyle.text}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}
