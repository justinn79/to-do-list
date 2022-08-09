import React from 'react'
import Todo from './Todo'

function ListOfTodo(){

    const selectedFolder ="work-related"

    const todos = [
        {
            id: '1',
            text: 'finish todo list project',
            date: '08/17/2022',
            time: '10:00 PM',
            day: '6',
            checked: false,
            folder: 'work-related'
        },

        {
            id: '2',
            text: 'watch programming videos',
            date: '08/14/2022',
            time: '8:00 PM',
            day: '3',
            checked: true,
            folder: 'fun things'
        },

        {
            id: '3',
            text: 'do laundry',
            date: '08/11/2022',
            time: '11:00 AM',
            day: '1',
            checked: false,
            folder: 'chores'
        },
    ]

    return(
        <div className="ListOfTodo">

            <div className="selected-Folder">
                {selectedFolder}
            </div>
            

            <div className="todos">
                {
                    todos.map( todo =>
                        <Todo todo={todo} key={todo.id} />)
                }
            </div>


        </div>
    )
}

export default ListOfTodo