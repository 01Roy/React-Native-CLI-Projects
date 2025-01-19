import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FlatCard = () => {
    return (
        <View >
            <Text style={[styles.headingText,styles.mainContainer]}>Flat Card</Text>
            <View style={styles.container}>
               <View style={[styles.card,styles.cardOne]}> <Text style={styles.mainContainer}>Red</Text></View>
               <View style={[styles.card,styles.cardTwo]}> <Text style={styles.mainContainer}>Green</Text></View>
               <View style={[styles.card,styles.cardThree]}> <Text style={styles.mainContainer}>Blue</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer :{color:"white"},
    headingText:{
        fontSize:24,
        fontWeight : "bold",
        paddingHorizontal : 8
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100
    },
    cardOne:{
        backgroundColor:"#FF5354",
        borderRadius:4,
        margin:8 
    },
    cardTwo:{
        backgroundColor:"#67eb34",
        borderRadius:4,
        margin:8 
    },
    cardThree:{
        backgroundColor:"#3489eb",
        borderRadius:4,
        margin:8 
    }
})

export default FlatCard;
