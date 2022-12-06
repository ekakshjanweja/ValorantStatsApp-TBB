import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';

//Importing external style

import {customStyle} from '../../style.ts';
import {weaponsApi} from '../utils/url';

export default function HomeScreen({navigation}) {
  const [weaponCategory, setWeaponCategory] = useState(
    'EEquippableCategory::Sidearm',
  );
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
        <Text style={customStyle.text}>Valorant Weapons</Text>
      </View>
      <View>
        <ScrollView style={customStyle.tabs} horizontal={true}>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(weaponCategory => 'All');
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>All</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(
                weaponCategory => 'EEquippableCategory::Sidearm',
              );
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>SideArms</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(weaponCategory => 'EEquippableCategory::Heavy');
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>Heavy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(weaponCategory => 'EEquippableCategory::Rifle');
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>Rifle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(
                weaponCategory => 'EEquippableCategory::Shotgun',
              );
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>Shotgun</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(
                weaponCategory => 'EEquippableCategory::Sniper',
              );
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>Sniper</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(weaponCategory => 'EEquippableCategory::SMG');
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>SMG</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setWeaponCategory(weaponCategory => 'EEquippableCategory::Melee');
            }}>
            <View style={customStyle.tabButton}>
              <Text style={customStyle.text}>Melee</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={customStyle.lowerContainer}>
        <ScrollView>
          {weaponsData.map((listData, index) => {
            if (weaponCategory != 'All') {
              if (listData.category === weaponCategory)
                return (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('WeaponDetailScreen', {
                        displayIcon: listData.displayIcon,
                        displayName: listData.displayName,
                        category: listData.category,
                        weaponStats: listData.weaponStats,
                        shopData: listData.shopData,
                      });
                    }}>
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
                  </TouchableOpacity>
                );
            } else {
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
            }
          })}
        </ScrollView>
      </View>
    </View>
  );
}
