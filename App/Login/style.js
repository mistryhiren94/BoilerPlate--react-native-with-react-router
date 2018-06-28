import { StyleSheet,Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    height:'100%',
    flexDirection:'column',
    backgroundColor: '#ffffff',
  },
  imagesize_logo:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    backgroundColor: '#fff'
  },
  input:{
    backgroundColor:'#EEE',
    margin:10,
    marginLeft:45,
    marginRight:45,
    borderRadius:5,
    padding:15,
    marginBottom:18,
  },
  inputLast:{
    backgroundColor:'#EEE',
    margin:10,
    marginTop: 20,
    marginLeft:45,
    marginRight:45,
    borderRadius:5,
    padding:15,
  },
  Button_1:{
    backgroundColor:'#0e72fc',
    alignItems:'center',
    justifyContent:'center',
    margin:10,
    marginLeft:45,
    marginRight:45,
    borderRadius:5,
    padding:15,

  },
  ButtonText:{
    color:'#ffffff',
    fontSize: 14,
    fontWeight:'500'
  },
  singleText:{
    color:'#9E9E9E',
    fontSize: 12,
    textAlign:'center'
  },
  LableText1:{
    color:'#424242',
    fontSize: 30,
    textAlign:'center',
  },
  LableText2:{
    color:'#ffffff',
    fontSize: 16,
    textAlign:'center',
    marginTop:8,
    marginBottom:20
  },
  alignFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 5
  },
  footerContentStyle: {
    fontSize: 15,
    color: '#9E9E9E'
  },
  footerContentStyle1: {
    fontSize: 15,
    color: '#9E9E9E',
    marginLeft: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#9E9E9E'
  },
  alignCenter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: deviceHeight,
		width: deviceWidth
  }
});