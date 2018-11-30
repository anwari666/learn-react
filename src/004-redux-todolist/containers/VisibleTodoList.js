import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const getVisibleTodos = (todos, filter) => {
    switch( filter ){
        case 'SHOW_COMPLETED':
        return todos.filter( (todo) => todo.completed )
        case 'SHOW_ACTIVE':
        return todos.filter( (todo) => !todo.completed )
        case 'SHOW_ALL':
        default:
            return todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch( toggleTodo(id) )
        }
    }
}

const VisibleTodoList = connect( mapStateToProps, mapDispatchToProps ) (TodoList)

export default VisibleTodoList