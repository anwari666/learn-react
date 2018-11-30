import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'


const TodoList = ( { todos, onTodoClick } ) => (
    <ul>
        todos.map( (todo, index) => (
            <Todo 
                key={ index }
                { ...todo } // spreading the `text` & `index`
                onClick = { () => onTodoClick( index ) } />
        ))
    </ul>)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ),
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList