import { StyleSheet,Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height:'100%',
    flexDirection:'column',
    backgroundColor: '#ffffff',
  },
  alignContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});