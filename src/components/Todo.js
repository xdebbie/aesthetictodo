import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const Todo = ({ onClick, completed, text }) => (
    <TouchableOpacity onPress={onClick}>
        <Text
            style={{
                textDecorationLine: completed ? 'line-through' : 'none',
                color: completed ? '#3bb4c1' : '#791f94',
                fontFamily: 'monospace',
                fontSize: 16,
                marginBottom: 7,
            }}
        >
            {text}
        </Text>
    </TouchableOpacity>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
}

export default Todo
