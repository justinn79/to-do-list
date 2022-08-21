import React, { useContext } from 'react'
import Todo from './Todo'
import Next7Days from '../side-components/Next7Days'

import { TodoContext } from '../../context'

function ListOfTodo(){

    const { todos, selectedFolder } = useContext(TodoContext)

    return(
        <div className="ListOfTodo">

            <div className="selected-Folder">
                <div className="selected-Folder-Text">
                    {selectedFolder}
                </div>
            </div>
            

            <div className="todos">
                {
                    selectedFolder === "next 7 days" ?
                    <Next7Days todos={todos} />
                    :
                    
                    todos.map( todo => 
                        <div className="todoList">
                        <Todo todo={todo} key={todo.id} />
                        </div>
                        )
                }
            </div>


        </div>
    )
}

export default ListOfTodo