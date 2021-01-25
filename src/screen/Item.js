import React from 'react';
import {
    View, 
    Text,
    Image,
    Dimensions,
    TouchableOpacity,
    _Text,
} from 'react-native';
const width_x = Dimensions.get('window').width

const Item = (props) => {
    return(
      <View style={{
        backgroundColor: 'white',
        margin: 5, 
        height: 300, 
        width: width_x/2.2 }}>
            <View style={{alignItems: 'center'}}>
                  <Text style={{marginLeft: 120, fontSize: 10}}>{props.weight}</Text>
                    <Image 
                        source={props.image} 
                        style={{
                            width: width_x/3.5, 
                            height: 100,
                            marginTop: 10}}/>
                    <Text style={{
                      textAlign: 'center', 
                      marginTop: 13,
                      fontSize: 17}}>{props.name}</Text>
                    <View style={{
                      flexDirection: 'row', 
                      marginTop: 10}}>
                      <Text style={{
                        color: '#bababa', 
                        fontSize: 13, 
                        marginLeft: -5}}>{props.price1}</Text>
                      <Text style={{
                        color: '#bababa', 
                        textDecorationLine: 'line-through', 
                        marginLeft: 5}} >{props.price2}</Text>
                      <Text style={{marginLeft: 5}}>{props.price3}</Text>
                    </View>
                    <TouchableOpacity style={{
                      flexDirection: 'row', 
                      backgroundColor: 'red', 
                      width: width_x/6.3,
                      height: 22,
                      borderRadius: 10,
                      alignItems: 'center',
                      marginTop: 10}}>
                      <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: 20,
                        paddingLeft:10,
                        paddingBottom: 2}}>{props.add1}</Text>
                      <Text style={{
                          color: 'white', 
                          paddingLeft: 5}}>{props.add2}</Text>
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        marginTop: 10}}>
                        <Text style={{color: '#bababa'}}>{props.any}</Text>
                        <Text style={{color: '#bababa'}}>{props.any2}</Text>
                    </View>
                </View>
            </View>

    );
  }

export default Item