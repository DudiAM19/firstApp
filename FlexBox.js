import React, {Component} from 'react';
import { Text, View } from 'react-native';

const Bar = () => {
    return(
      <View style={{flexDirection: "row", height: 100, padding: 20}}>
        <View style={{backgroundColor: "powderblue", flex: 0.2}} />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    katalog: {
        marginTop: 10,
        height: 190,
        width: 130,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
  });
  
  const Menu = () => {
    return(
      <View style={{flexDirection: "row", height: 70}}>
        <View style={{alignItems: 'center', backgroundColor: '#acf2bf', flex: 1, borderRadius: 10}}>
          <Text>Heading</Text>
          <Image source={{uri: 'https://placeimg.com/100/100/nature'}} style={{height: 50, width: 50, borderRadius: 50, marginLeft: -280, marginTop: -10}} />
        </View>
      </View>
    );
  }
  
  const Keterangan = (props) => {
    return(
      <View>
        <Text style={{fontStyle: 'italic'}}>{props.nama}</Text>
        <Text style={{fontWeight: 'bold'}}>{props.harga}</Text>
      </View>
    );
  }
  
  const Barang = () => {
    return(
      <View style={{}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View style={styles.katalog}>
            <Image style={{width: 50, height: 50}} source={require('./img/laptop.jpg')}/>
            <Keterangan nama="Laptop hp omen" harga="Rp.12.000.000" />  
            <View style={{marginTop: 8}}><Button title="Buy" onPress={() => Alert.alert('Sudah Masuk Keranjang !!')} /></View>
          </View>
          <View style={styles.katalog}>
            <Image style={{width: 50, height: 50}} source={require('./img/laptop.jpg')}/>
            <Keterangan nama="Laptop hp omen" harga="Rp.12.000.000" />  
            <View style={{marginTop: 8}}><Button title="Buy" onPress={() => Alert.alert('Sudah Masuk Keranjang !!')} /></View>
          </View>
          
      </View>
      </View>
    );
  }
  
  const Bar2 = () => {
    return(
  <View style={{flexDirection: "row", padding: 10}}>
    <View style={{backgroundColor: "skyblue", width: 100, height: 100,  marginLeft: 5, borderRadius: 10}} ><Text>Content</Text></View>
    <View style={{backgroundColor: "steelblue", width: 100, height: 100, marginLeft: 20, borderRadius: 10}}><Text>Content</Text></View>
    <View style={{backgroundColor: "powderblue", width: 100, height: 100, marginLeft: 20, borderRadius: 10}}><Text>Content</Text></View>
  </View>
    );
  }
  
  const Photo = () => {
    return <Image source={{uri: 'https://placeimg.com/100/100/nature'}} style={{height: 50, width: 50, borderRadius: 50}} />
  }
  
  const Footer = () => {
    return(
      <View style={{flexDirection: "row", height: 100, padding: 20}}>
        <View style={{alignItems: 'center', backgroundColor: '#acf2bf', flex: 1}}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
  