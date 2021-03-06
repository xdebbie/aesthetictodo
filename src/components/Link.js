import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native-elements'

const Link = ({ active, children, onClick }) => (
    <Button
        onPress={onClick}
        disabled={active}
        title={children}
        buttonStyle={{
            backgroundColor: '#ff0056',
            flex: 1,
            width: '100%',
            borderRadius: 0,
            padding: 10,
        }}
        titleStyle={{
            fontSize: 14,
            fontFamily: 'monospace',
            textTransform: 'lowercase',
        }}
        containerStyle={{
            marginBottom: 5,
        }}
    ></Button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Link
