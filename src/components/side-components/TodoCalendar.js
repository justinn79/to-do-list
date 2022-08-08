import React from 'react'

function TodoCalendar(){
    
    const todoCalendaritems = ['Today', 'Next 7 days', 'All days']

    return(
        <div className="TodoCalendar">
            <div className="title">
                <p>Your To-do Calendar</p>
            </div>

            <div className="items">
                {
                    todoCalendaritems.map( item => 
                        <div className="item" key={item}>
                            { item }
                        </div>
                    )
                }
            </div>
        </div>

        
    )
}

export default TodoCalendar