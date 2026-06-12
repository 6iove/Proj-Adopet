import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';


export default function Header(){
    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.iconButtom}>
                    <Feather name="menu" size={28} color={'#2D2D2D'}/>
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                    <Text style={styles.headerTitle}>ADOPET</Text>
                </View>

                <TouchableOpacity style={styles.adoptButton}>
                    <Text style={styles.adoptButtonText}>Adotar</Text>
                </TouchableOpacity>

             </View>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: '#a9a6a6',
    }, 
    headerContainer: {
        height: 60,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    iconButtom: {
        justifyContent: 'center',
        alignItems: 'center', 
        width: 40, 
        height:40,
    }, 
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center', 
    },
    headerTitle: {
        fontSize: 22, 
        fontWeight: 'bold', 
        color: '#6B0888', 
    }, 
    adoptButton: {
        backgroundColor: '#2D2D2D',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    adoptButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
})