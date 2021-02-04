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

    returnPressed = event => {
        if (event.nativeEvent.key == 'Enter' && !this.state.addTodo) {
            return
        } else if (event.nativeEvent.key == 'Enter') {
            this.props.dispatch(addTodo(this.state.addTodo))
            // clearing the input
            this.state.addTodo = ''
            this.TextInput.clear()
        }
    }

    returnPressedMobile = () => {
        this.props.dispatch(addTodo(this.state.addTodo))
        // clearing the input
        this.state.addTodo = ''
        this.TextInput.clear()
    }

    render() {
        return (
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{
                        marginTop: 40,
                        height: 40,
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
                    onKeyPress={this.returnPressed.bind(this)}
                    // when pressing the return key on Android keyboards
                    onSubmitEditing={this.returnPressedMobile.bind(this)}
                />
                <Button
                    onPress={() => {
                        if (!this.state.addTodo) {
                            return
                        } else {
                            this.props.dispatch(addTodo(this.state.addTodo))
                            // clearing the input
                            this.state.addTodo = ''
                            this.TextInput.clear()
                        }
                    }}
                    title="Add"
                    buttonStyle={{
                        backgroundColor: '#ff0056',
                        flex: 1,
                        width: '100%',
                        borderRadius: 0,
                        maxHeight: 20,
                        padding: 20,
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
