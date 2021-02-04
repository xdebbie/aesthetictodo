import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NewTodo from '../containers/NewTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { View } from 'react-native'

const App = () => (
    <View
        style={{
            paddingTop: 30,
            paddingLeft: 60,
            paddingRight: 60,
            paddingBottom: 60,
            backgroundColor: '#fff1e5',
            height: '100%',
        }}
    >
        <Header />
        <NewTodo />
        <VisibleTodoList />
        <Footer />
    </View>
)

export default App
