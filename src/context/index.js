import React, { createContext, useState} from 'react'
import {useFilterTodos, useTodos} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){

    const defaultFolder = 'next 7 days'
    const [selectedFolder, setSelectedFolder] =useState(defaultFolder)

    const todos = useTodos()
    const filteredTodos = useFilterTodos(todos, selectedFolder)

    const [selectedTodo, setSelectedTodo] = useState(undefined)

    const [showCalendar, setShowCalendar] = useState(true)

    // //highlight what is clicked on the to-do calendar
    // const [clicked, setClicked] = useState(false)

    return(
        <TodoContext.Provider
            value={
                {
                    selectedFolder,
                    setSelectedFolder,

                    todos : filteredTodos,

                    selectedTodo,
                    setSelectedTodo,

                    showCalendar,
                    setShowCalendar
                }
            }
        >  
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContextProvider, TodoContext}