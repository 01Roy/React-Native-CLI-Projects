import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Place</Text>
            <View style={[styles.card,styles.cardElevated]}>
                <Image source={{uri:'https://miro.medium.com/v2/resize:fit:1200/1*odW0CyTVxMVt5s3yhjjOhw.png'}} style={styles.cardImage}/>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Power Of React Native</Text>
                    <Text style={styles.cardLable}>Let learn React Native</Text>
                    <Text style={styles.Discription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis obcaecati exercitationem </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText:{
        color:"white",
        fontSize:24,
        fontWeight : "bold",
        paddingHorizontal : 8
    },
    card:{
        width:350,
        height:450,
        borderRadius:10,
        marginVertical:12,
        marginHorizontal:16,

    },
    cardElevated:{
        backgroundColor:"#FFFFFF",
        elevation:10,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    cardImage:{
    height: 300, // Set image height
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    marginBottom:8,
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardTitle:{
        color:"#000000",
        fontSize:18,
        fontWeight:"bold",
        marginBottom:5
    },
    cardLable:{
        color:"#000000",
        fontSize:15,
        fontWeight:"bold"
    },
    Discription:{       
         color:"#000000",
         fontSize:14,
         marginBottom:5
    },
    cardFooter:{
        color:"#000000",
        fontWeight:'bold'
    }
})

export default FancyCard;
