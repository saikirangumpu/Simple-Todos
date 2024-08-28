// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItems, onDelete} = props
  const {title, id} = todoItems

  const onDeleteTodo = () => {
    onDelete(id)
  }

  return (
    <li className="todo-item">
      <p className="each-item"> {title} </p>
      <button className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem

/*
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem


*/
