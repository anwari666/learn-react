import React from 'react'
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import todoApp from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore( todoApp )

const TodoApp = () => (
    <Provider store={ store }>
        <div>
            <h2>Exercise 4: Redux todolist </h2>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </Provider>
)

export default TodoApp