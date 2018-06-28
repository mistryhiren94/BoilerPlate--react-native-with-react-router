import React, { Component } from 'react';
import {
  View,
  Platform,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Modal
 } from 'react-native';
 import styles from './style';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: '',
      password: ''
    };
  }
  goToSignIn() {
    this.props.history.push('/');
  }
  signUp() {
    this.props.history.push('/home');
  }
  render() {
    return (
      <View style={styles.container}>
        {!this.state.isLoading &&
          <ImageBackground style={styles.imagesize_logo}>
            <Text style={styles.LableText1}>Sign Up </Text>
            <TextInput style={styles.inputLast}
              fontSize={(Platform.OS === 'ios') ? 18:20}
              placeholder='Mobile number'
              placeholderTextColor='#9E9E9E'
              underlineColorAndroid='transparent'
              textAlign='center'
              keyboardType='phone-pad'
              ref='mobile'
              value={this.state.mobile}
              onChangeText={(mobile) => this.setState({mobile: mobile})}
              maxLength={10} />

            <TextInput style={styles.input}
              fontSize={(Platform.OS === 'ios') ? 18:20}
              placeholder='Password'
              placeholderTextColor='#9E9E9E'
              underlineColorAndroid='transparent'
              textAlign='center'
              ref='password'
              value={this.state.password}
              autoCorrect={false}
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password: password})} />

            <TouchableOpacity onPress={this.signUp.bind(this)}>
              <View style={styles.Button_1}>
                <Text style={styles.ButtonText}>SIGN UP</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.alignFooter}>
              <View>
                <Text style={styles.footerContentStyle}>Have an Account?</Text>
              </View>
              <TouchableOpacity onPress={this.goToSignIn.bind(this)}>
                <Text style={styles.footerContentStyle1}>Login Here</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ||
          <View style={styles.alignCenter}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        }
        <View>
          {this.state.isModal &&
            <Modal
              animationType="slide"
              transparent={true}
              style={{height:deviceHeight,width:deviceWidth,alignItems:'center',justifyContent:'center',backgroundColor:'#000'}}
              visible={this.state.isModal}
              onRequestClose={() => {alert("Modal has been closed.")}}
              >
                <View style={{backgroundColor:'#453a5a', opacity:0.8 ,borderRadius:5,height:100,width:100,position:'absolute',top:deviceHeight/2.5,left:deviceWidth/2.5, alignItems: 'center', justifyContent: 'center'}}>
                  <ActivityIndicator size="large" color="#fff" />
                </View>
            </Modal>
          }
        </View>
      </View>
    );
  }
}