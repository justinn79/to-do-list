import React, { createContext, useState} from 'react'
import {useFilterTodos, useTodos} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){

    const defaultFolder = 'today'
    const [selectedFolder, setSelectedFolder] =useState(defaultFolder)

    const todos = useTodos()
    const filteredTodos = useFilterTodos(todos, selectedFolder)

    return(
        <TodoContext.Provider
            value={
                {
                    selectedFolder,
                    setSelectedFolder,

                    todos : filteredTodos
                }
            }
        >  
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContextProvider, TodoContext}