import {StyleSheet} from 'react-native';

const customStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },

  upperContainer: {
    flex: 1,
    backgroundColor: '#080808',
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lowerContainer: {
    flex: 7,
    backgroundColor: '#080808',
    margin: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },

  listStyle: {
    flex: 1,

    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 30,
    backgroundColor: '#222222',
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    height: 200,
    width: 300,
  },

  listText: {color: 'white', fontSize: 14},

  cardImage: {width: 200, height: 100},
});

export {customStyle};
