import React, {useContext, useState} from 'react'

import { TodoContext } from '../../context'

function TodoCalendar(){
    
    const todoCalendaritems = ['today', 'next 7 days', 'all days', 'past due date', 'completed']

    const { setSelectedFolder } = useContext(TodoContext)
    const { setSelectedTodo } = useContext(TodoContext)

    const { selectedFolder} = useContext(TodoContext)

    // const [clicked, setClicked] = useState(false)

    return(
        <div className="TodoCalendar">
            <div className="title">
                <p>To-do Calendar</p>
            </div>

            <div className="items">
                {
                    todoCalendaritems.map( item => 
                        <div 
                            key={item}
                            onClick={ () => {setSelectedFolder(item); setSelectedTodo(undefined); }}
                            className={item === selectedFolder ? "highlighted" : "item"}
                        >
                            {
                                item.charAt(0).toUpperCase() + item.slice(1)
                            }
                        </div>
                    )
                }
            </div>
        </div>

        
    )
}

export default TodoCalendar