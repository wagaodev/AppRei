import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A22C32'
  },
  logoImg: {
    height: 300,
    width: 300,
    resizeMode: "contain"
  },
  title: {
    fontSize: 24,
    color: '#F4EDE8',
    fontFamily: 'Roboto_500Medium',
    marginTop: 64,
    marginHorizontal: 24
  }
})

export default styles;