import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-native'
const Link = ({ active, children, onClick }) => (
    <Button
        color="#ff0056"
        onPress={onClick}
        disabled={active}
        style={{
            marginLeft: '4',
        }}
        title={children}
    ></Button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Link
