import React from 'react';
import { Button, Image, Text, Touchable, View } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const Detail = (props) => {
    return(
        <View style={{backgroundColor: 'white', margin: 10}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../img/images.png')} style={{height: 18, width: 18}} />
                <Text style={{fontSize: 15, marginLeft: 7, marginTop: -3}}>{props.name}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
                <Image source={require('../img/lokasi.png')} style={{height: 12, width: 12}} />
                <Text style={{fontSize: 10, marginLeft: 5, marginTop: -2, color: "#a3a3a3"}}>{props.location}</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 12}}>
                <Image source={require('../img/unnamed.png')} style={{height: 10, width: 55}} />
                <Text style={{fontSize: 10, marginLeft: 6, marginTop: -3, color: "#a3a3a3"}}>{props.review}</Text>
            </View>
        </View>
    );
}

const Home = ({navigation}) => {
    return(
        <View style={{ backgroundColor: "white"}}>
            <ScrollView style={{margin: 10}}>
                <View style={{
                    alignItems: 'center', 
                    backgroundColor: 'white', 
                    borderRadius: 8}}>
                    <TextInput 
                        placeholder="Search" 
                        style={{
                            paddingLeft: 10, 
                            borderRadius: 8, 
                            width: '100%', 
                            shadowColor: '#000', 
                            elevation: 2}}/>
                </View>
                <View style={{
                    backgroundColor: 'white', 
                    height: 300, 
                    width: '100%', 
                    marginTop: 30, 
                    borderRadius: 8,
                    shadowColor: "#000",
                    elevation: 2}}>
                    <Image source={require('../img/Pantai.jpg')} style={{width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8}} />
                    <TouchableOpacity>
                        <Detail name="Pantai Klayar" location="Pacitan Jawa Timur, Indonesia" review="636"/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: 'white', 
                    height: 300, 
                    width: '100%', 
                    marginTop: 30, 
                    borderRadius: 8,
                    shadowColor: "#000",
                    elevation: 2,
                    }}>
                    <Image source={require('../img/kolam.jpg')} style={{width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8}} />
                    <TouchableOpacity onPress={() => navigation.navigate('market')}>
                        <Detail name="Kolam Wisata Indah" location="Yogyakarta" review="636"/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default Home;