import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { View, TextInput } from 'react-native'
import { Button } from 'react-native-elements'

export class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            addTodo: '',
            empty: '',
        }
    }

    render() {
        return (
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{
                        height: 40,
                        marginTop: 40,
                        fontFamily: 'monospace',
                    }}
                    placeholder="Write your chores..."
                    placeholderTextColor="#99a1a7"
                    onChangeText={addTodo => this.setState({ addTodo })}
                    clearButtonMode="always"
                    // to clear the input field after submitted
                    ref={input => {
                        this.TextInput = input
                    }}
                    // to alternatively allow the input to be sent if the return key is pressed
                    onKeyPress={event => {
                        if (
                            event.nativeEvent.key == 'Enter' &&
                            !this.state.addTodo
                        ) {
                            return
                        } else if (event.nativeEvent.key == 'Enter') {
                            this.props.dispatch(addTodo(this.state.addTodo))
                            // clearing the input
                            this.state.addTodo = ''
                            this.TextInput.clear()
                            console.log(this.props)
                        }
                    }}
                />
                <Button
                    color="#ff0056"
                    onPress={() => {
                        if (!this.state.addTodo) {
                            return
                        } else {
                            this.props.dispatch(addTodo(this.state.addTodo))
                            // clearing the input
                            this.state.addTodo = ''
                            this.TextInput.clear()
                            console.log(this.props)
                        }
                    }}
                    title="Add"
                    buttonStyle={{
                        backgroundColor: '#ff0056',
                        flex: 1,
                        height: 20,
                        width: '100%',
                        borderRadius: 0,
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
            </View>
        )
    }
}

export default connect()(AddTodo)
