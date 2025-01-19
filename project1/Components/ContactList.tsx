import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:"someone",
            status:"Making your GPay smooth",
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'
        },
        {
            uid:2,
            name:"someone",
            status:"Making your GPay smooth",
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'
        },
        {
            uid:3,
            name:"someone",
            status:"Making your GPay smooth",
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'
        },
        {
            uid:4,
            name:"someone",
            status:"Making your GPay smooth",
            imageUrl:'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png'
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts?.map(({uid,name, status, imageUrl})=>(
                <View key={uid} style={styles.userCard}>
                    <Image source={{uri:imageUrl}} style={styles.userImage}/>
                    <View>
                    <Text style={styles.userName}>{name}</Text>
                    <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        color:"white",
        fontWeight:"bold",
        paddingHorizontal:8
    },
    container:{
        paddingHorizontal:16
    },
    userCard:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    userImage:{
        width:60,
        height:60,
        borderRadius:100,
        marginRight:14
    },
    userName:{
        color:"white"
    },
    userStatus:{
        color:"white"
    }

})