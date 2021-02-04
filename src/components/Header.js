import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const Header = () => (
    <View style={styles.containerHeader}>
        <Text style={styles.header}>エステティック</Text>
    </View>
)

const styles = StyleSheet.create({
    containerHeader: {
        top: 30,
        textAlign: 'center',
        paddingBottom: 25,
    },
    header: {
        fontSize: 14,
        fontStyle: 'italic',
    },
})

export default Header
