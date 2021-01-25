import React from 'react';
import {
    View,
    Text,    
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
} from 'react-native';
import Item from './Item';


const DATA = [
    {
      id: 1,
      name: 'Apple - Best of Himalaya',
      price1: 'Rp',
      price2: '199',
      price3: '169.5',
      add1: '+',
      add2: 'ADD',
      any: 'Standard Delivery',
      any2: '(Tomorrow evening)',
      image: require('../img/apel.jpg'),
      weight : '500gr' 
    },
  {
      id: 2,
      name: 'Chicken - Yummy Leg Piece',
      price1: 'Rp',
      price2: '215',
      price3: '200',
      add1: '+',
      add2: 'ADD',
      any: 'Standard Delivery',
      any2: '(Tomorrow evening)',
      image: require('../img/ayam.jpg'),
      weight : '1kg' 
    },
  {
      id: 3,
      name: 'Nutella - Taste of Hazelnuts',
      price1: 'Rp',
      price2: '245',
      price3: '169.5',
      add1: '+',
      add2: 'ADD',
      any: 'Standard Delivery',
      any2: '(Tomorrow evening)',
      image: require('../img/nutella.jpg'),
      weight : '500gr' 
    },
  {
      id: 4,
      name: 'Whole Wheat Bread',
      price1: 'Rp',
      price2: '45',
      price3: '35',
      add1: '+',
      add2: 'ADD',
      any: 'Standard Delivery',
      any2: '(Tomorrow evening)',
      image: require('../img/roti.jpg'),
      weight : '100gr' 
    }
  ]

const styles = StyleSheet.create({
    Text: {
        textAlign: 'center',
        color: '#ababab',
        fontSize: 10,
    },
});

const Header = () => {
    return(
        <View>
            <View style={{
                height: 40, 
                backgroundColor: '#ff3b53', 
                alignItems: 'center', 
                padding: 5}}>
                <Text style={{color: 'white', fontSize: 16}}>Deals of the week</Text>
            </View>
            <View style={{padding: 10, 
                flexDirection: 'row', 
                alignItems: 'center', 
                backgroundColor: 'white', 
                height: 50}}>
                <Text>20 Products found</Text>
                <Image source={require('../img/panah.png')} style={{marginLeft: 170, height: 20, width: 20}} />
            </View>
        </View>
    );
}

const Menu = () => {
    return(      
        <View>
            <FlatList 
                style={{margin: 10}}
                data={DATA}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Item 
                    name={item.name} 
                    noHP={item.noHP} 
                    image={item.image} 
                    weight={item.weight}
                    price1={item.price1}
                    price2={item.price2}
                    price3={item.price3}
                    add1={item.add1}
                    add2={item.add2}
                    any={item.any}
                    any2={item.any2}/>
            )}
            />
    </View>
    );
}

const Footer = () => {
    return(
        <View>
            <View style={{
                width: '100%', 
                height: 50, 
                backgroundColor: '#e8e8e8'}} />          
        </View>
    );
}

const Market = () => {
    return(
        <View>
            <Header />
            <Menu />
        </View>
    );
}

export default Market; 