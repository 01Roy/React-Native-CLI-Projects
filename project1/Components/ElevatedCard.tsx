import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Card</Text>
            <ScrollView horizontal={true} style={styles.conainer}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Tap</Text>
                </View>
            </ScrollView>
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
    conainer:{
        padding:8
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        width:100,
        height:100,
        borderRadius:5,
        margin:4
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor: "#333"
    }

})

export default ElevatedCard;
