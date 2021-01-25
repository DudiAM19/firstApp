import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity
} from "react-native";

const Login = ({navigation}) => {
  return(
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <View style={{
      alignItems: 'center',
      marginTop: 140,
      }}>
      <Text style={{
        fontSize: 20,
        color: '#a3a3a3', 
        fontWeight: 'bold'}}>Welcome</Text>
      <Text style={{
        color: '#a3a3a3', 
        fontSize: 10}}>Please Login</Text>
    </View>

    <View style={{
      alignItems: 'center',
      marginTop: 70}} >
      <TextInput style={{
        borderBottomWidth: 2,
        width: 290,
        borderBottomColor: '#62dede'}}
        placeholder="Username"/>
      <TextInput style={{
        borderBottomWidth: 2,
        width: 290,
        borderBottomColor: '#62dede'}}
        placeholder="Password" />
    </View>
    <View>
      <TouchableOpacity style={{alignItems: 'center', marginTop: 50}} onPress={() => navigation.navigate('home')}>
        <View style={{
          backgroundColor: '#62dede',
          height: 35,
          width: 250,
          alignItems: 'center',
          borderRadius: 4
        }}>
          <Text style={{
            color: 'white', 
            marginTop: 6, 
            fontSize: 12, 
            fontWeight: 'bold'}}>Sign in</Text>
        </View>
      </TouchableOpacity>
      <View style={{
        flexDirection: 'row',
        marginLeft: 85, 
        marginTop:10}}>
        <Text style={{
          fontSize: 12, 
          color: '#a3a3a3'}}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={{
            fontSize: 12, 
            marginLeft: 6, 
            fontWeight: 'bold', 
            color: '#62dede'}}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
}


export default Login;

