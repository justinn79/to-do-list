import React, {useState, useContext} from 'react'
import firebase from '../../firebase'
import { TodoContext } from '../../context'

import { Trash, Circle, CheckCircleFill } from 'react-bootstrap-icons'

function Todo({todo}){

    const[hover, setHover] = useState(false)

    const { selectedTodo, setSelectedTodo } = useContext(TodoContext)

    const deleteButton = todo => {
        deleteTodo(todo)

        if(selectedTodo === todo){
            setSelectedTodo(undefined)
        }
    }

    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }

    const checkTodo = ( todo ) => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .update(
                {
                    checked : !todo.checked
                }
            )
    }

    return(
        <div className="Todo">

            <div
                className="todoContainer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >

                <div 
                    className="check-todo"
                    onClick={ () => checkTodo( todo )}
                >
                    {
                        todo.checked ?
                        <span className="checked">
                            <CheckCircleFill color="blue"/>
                        </span>
                        :
                        <span className="unchecked">
                            <Circle />
                        </span>
                    }
                </div>

                <div 
                    className="text"
                    onClick = { () => setSelectedTodo(todo)}
                >

                    <p className="todo-text">
                        {todo.text}
                    </p>

                    <span className="time-and-folder">
                        {todo.time} - {todo.folder} 
                    </span>


                </div>

                <div className="delete-todo" onClick={ () => deleteButton(todo) }>
                    {
                        (hover || todo.checked) &&
                        <span>
                            <Trash />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo