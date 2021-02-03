import React from 'react'
import Footer from './Footer'
import NewTodo from '../containers/NewTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { View } from 'react-native'

const App = () => (
    <View
        style={{
            padding: 60,
            backgroundColor: '#fff1e5',
            height: '100%',
        }}
    >
        <NewTodo />
        <VisibleTodoList />
        <Footer />
    </View>
)

export default App
