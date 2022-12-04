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
    justifyContent: 'center',
    alignItems: 'center',
  },

  lowerContainer: {
    flex: 7,
    backgroundColor: '#080808',
    margin: 20,
    justifyContent: 'center',
  },

  counter: {
    flex: 1,
    backgroundColor: '#080808',
    margin: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  text: {
    color: 'white',
  },
});

export {customStyle};
