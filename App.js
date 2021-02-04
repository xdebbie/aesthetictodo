import React from 'react'

import { Provider } from 'react-redux'

import { createStore } from 'redux'
import rootReducer from './src/redux'
import TodoApp from './src/components/TodoApp'

const store = createStore(rootReducer)
export default class MainApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <TodoApp />
            </Provider>
        )
    }
}
