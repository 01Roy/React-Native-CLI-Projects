import React from 'react';
import { StyleSheet, View, Linking, Text, Image,TouchableOpacity } from 'react-native';

const ActionCard = () => {
    function openWebsite(website: string){
        Linking.openURL(website)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card,styles.elevatedCard]}>
               <View style={styles.headingContainer}>
                <Text style={[styles.headerText]}>What's new in NextJs 15</Text>
               </View>
               <Image source={{uri:'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'}}
               style={styles.cardImage}
               />
               <View  style={styles.bodyContainer}>
                    <Text numberOfLines={3} style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem odio vitae qui iste itaque. Facere, unde animi? Exercitationem repellendus veniam magni, cum nobis possimus aliquam asperiores ab voluptatem qui distinctio!</Text>
               </View>
               <View  style={styles.footerContainer}>
                <View>
                    <TouchableOpacity onPress={()=>{openWebsite("https://hydrolink-api.vercel.app/")}}>
                        <Text style={[styles.socialLink,styles.description]}>Read More</Text>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity onPress={()=>{openWebsite("https://hydrolink-api.vercel.app/")}}>
                        <Text style={[styles.socialLink,styles.description]}>Follow Me</Text>
                </TouchableOpacity>
                </View>
               </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText:{
        color:"white",
        fontSize:24,
        fontWeight:"bold",
        paddingHorizontal : 8
    },
    card:{
        width: 350,
        borderRadius:6,
        marginVertical:12,
        marginHorizontal:10
    },
    elevatedCard:{
        backgroundColor:"#5A6C57",
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: "#333",
        shadowOpacity:0.4
    },
    headingContainer:{
        height:40,
        flexDirection: "row",
        justifyContent:"center",
        alignItems: "center"
    },
    headerText:{
        color:"#000",
        textAlign:"center",
        fontWeight:"bold"
    },
    cardImage:{
        height:200
    },
    bodyContainer:{},
    description:{color:"white"},
    footerContainer:{
        padding:8,
        flexDirection:"row",
        justifyContent:'space-evenly',
        alignItems:"center",
        
        
    },
    socialLink:{
        fontSize:16,
        color:"#0000000",
        backgroundColor:"#fff",
        paddingHorizontal:8,
        borderRadius:6,
        padding:6
    }
})

export default ActionCard;
