import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Footer(){
    return(
        <View style={styles.footerContainer}>
            <Text style={styles.footerTitle}>ADOPET</Text>
            <View style={styles.socialContainer}>
                {/*icon facebook*/}
                <TouchableOpacity style={styles.iconSocial}>
                    <FontAwesome name="facebook-official" size={15} color="#fff"  />
                </TouchableOpacity>

                {/*icon linkedin*/}
                <TouchableOpacity style={styles.iconSocial}>
                    <FontAwesome name="linkedin-square" size={15} color="#fff"  />
                </TouchableOpacity>

                {/*icon instagram*/}
                <TouchableOpacity style={styles.iconSocial}>
                    <FontAwesome name="instagram" size={15} color="#fff"  />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        backgroundColor: '#6B0888',
        paddingVertical: 30, 
        paddingHorizontal: 24, 
        width: '100%',
    }, 
    footerTitle: {
        color: '#fff', 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginBottom: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSocial: {
        marginRight: 20,
    },
})