import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'
import { View, Text, StyleSheet } from 'react-native'
const Footer = () => (
    <View style={styles.containerMain}>
        <View style={styles.containerFooter}>
            <Text style={styles.displayLabel}>Display:</Text>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </View>
    </View>
)

const styles = StyleSheet.create({
    containerMain: {
        flex: 1,
        alignItems: 'center',
    },
    containerFooter: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    displayLabel: {
        backgroundColor: 'white',
        height: 30,
        paddingTop: 5,
        fontSize: 16,
        textAlign: 'center',
    },
})

export default Footer
