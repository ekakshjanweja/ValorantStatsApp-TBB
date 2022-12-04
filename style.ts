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

  counterContainer: {
    backgroundColor: '#red',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  counter: {
    margin: 50,
    backgroundColor: '#222222',
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: 'white',
    fontSize: 20,
  },
});

export {customStyle};
