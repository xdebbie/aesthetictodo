import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { View, Text, TextInput, Button } from 'react-native'

export class AddTodo extends Component {
    constructor() {
        super()
        this.state = {
            addTodo: '',
        }
    }

    render() {
        return (
            <View style={{ marginBottom: 20 }}>
                <TextInput
                    style={{ height: 40, marginTop: 40 }}
                    placeholder="Write your chores..."
                    onChangeText={addTodo => this.setState({ addTodo })}
                />
                <Button
                    color="#ff0056"
                    onPress={() => {
                        if (!this.state.addTodo) {
                            return
                        } else {
                            this.props.dispatch(addTodo(this.state.addTodo))
                            console.log(this.props)
                        }
                    }}
                    title="Add"
                />
            </View>
        )
    }
}

export default connect()(AddTodo)