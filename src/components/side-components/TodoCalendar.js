import React, {useContext} from 'react'

import { TodoContext } from '../../context'

function TodoCalendar(){
    
    const todoCalendaritems = ['Today', 'Next 7 days', 'All days']

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
                            { item }
                        </div>
                    )
                }
            </div>
        </div>

        
    )
}

export default TodoCalendar