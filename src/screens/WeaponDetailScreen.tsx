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
import React from 'react';

//Importing external style

import {customStyle} from '../../style.ts';

export default function WeaponDetailScreen({route, navigation}) {
  const {displayName, category, displayIcon, weaponStats, shopData} =
    route.params;
  return (
    <View style={customStyle.mainContainer}>
      <View style={customStyle.upperContainer}>
        <Text style={customStyle.text}>Valorant Weapons</Text>
      </View>
      <View style={customStyle.lowerContainerAlt}>
        <View style={customStyle.listStyle}>
          <Image
            source={{
              uri: displayIcon,
            }}
            style={customStyle.cardImage}
            resizeMode="contain"
          />
          <Text style={customStyle.text}>{displayName}</Text>
          <Text style={customStyle.text}>Weapon Cost: {shopData.cost}</Text>
        </View>
        <View style={customStyle.listStyleAlt}>
          <Text style={customStyle.text}>
            Category: {category.replace('EEquippableCategory::', '')}
          </Text>
          <Text style={customStyle.text}>
            Fire Rate: {weaponStats.fireRate}
          </Text>
          <Text style={customStyle.text}>
            Magazine Capacity: {weaponStats.magazineSize}
          </Text>
        </View>
      </View>
    </View>
  );
}
