import React, {useState} from 'react'
import firebase from '../../firebase'

import { Trash, Circle, CheckCircleFill } from 'react-bootstrap-icons'

function Todo({todo}){

    const[hover, setHover] = useState(false)

    const deleteTodo = todo => {
        firebase
            .firestore()
            .collection('todos')
            .doc(todo.id)
            .delete()
    }

    return(
        <div className="Todo">

            <div
                className="todoContainer"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                >

                <div className="check-todo">
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

                <div className="text">

                    <p className="todo-text">
                        {todo.text}
                    </p>

                    <span className="time-and-folder">
                        {todo.time} - {todo.folder} 
                    </span>


                </div>

                <div className="delete-todo" onClick={ () => deleteTodo(todo) }>
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