import React, {useContext} from 'react'

import { TodoContext } from '../../context'

function TodoCalendar(){
    
    const todoCalendaritems = ['today', 'next 7 days', 'all days']

    const { setSelectedFolder } = useContext(TodoContext)

    return(
        <div className="TodoCalendar">
            <div className="title">
                <p>Your To-do Calendar</p>
            </div>

            <div className="items">
                {
                    todoCalendaritems.map( item => 
                        <div 
                            className="item" 
                            key={item}
                            onClick={ () => setSelectedFolder(item)}    
                        >
                            { item.charAt(0).toUpperCase() + item.slice(1) }
                        </div>
                    )
                }
            </div>
        </div>

        
    )
}

export default TodoCalendar