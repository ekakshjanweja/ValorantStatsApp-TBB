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

import {customStyle} from '../../style.ts';
import {weaponsApi} from '../utils/url';

export default function HomeScreen() {
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

      setWeaponsData(response.data.data);

      //   for (let index = 0; index < weaponsData.length; index++) {
      //     const element = response.data.data[index];
      //     if (element.uuid.includes('63e6c2b6-4a8e-869c-3d4c-e38355226584')) {
      //       setWeaponsData(response.data.data);
      //     }
      //   }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={customStyle.mainContainer}>
      {/* <StatusBar backgroundColor={'#121212'} /> */}
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Home Screen</Text>
      </View>
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Tabs</Text>
      </View>
      <View style={customStyle.lowerContainer}>
        <ScrollView>
          {weaponsData.map((listData, index) => {
            if (listData.category === 'EEquippableCategory::Sidearm')
              return (
                <View style={customStyle.listStyle} key={listData.uuid}>
                  <Image
                    source={{
                      uri: listData.displayIcon,
                    }}
                    style={customStyle.cardImage}
                    resizeMode="contain"
                  />
                  <Text style={customStyle.listText}>
                    {listData.displayName}
                  </Text>
                </View>
              );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
