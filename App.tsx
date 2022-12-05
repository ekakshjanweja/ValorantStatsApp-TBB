import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import Axios from 'axios';

//Importing external style

import {customStyle} from './style.ts';
import {weaponsApi} from './src/utils/url.js';

export default function App() {
  const [weaponsData, setWeaponsData] = useState([
    {
      id: 1,
      name: 'Ekaksh',
    },

    {
      id: 2,
      name: 'Stomej',
    },
  ]);

  useEffect(() => {
    fetchApiData();
  }, []);

  const fetchApiData = async () => {
    try {
      const response = await Axios.get(weaponsApi);
      console.log(response);
      setWeaponsData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={customStyle.mainContainer}>
      <StatusBar backgroundColor={'#121212'} />
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Hello World</Text>
      </View>
      <View style={customStyle.lowerContainer}>
        <ScrollView>
          {weaponsData.map((listData, index) => {
            return (
              <View style={customStyle.listStyle}>
                <Image
                  source={{
                    uri: listData.displayIcon,
                  }}
                  style={customStyle.cardImage}
                  resizeMode="contain"
                />
                <Text style={customStyle.listText}>{listData.displayName}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
