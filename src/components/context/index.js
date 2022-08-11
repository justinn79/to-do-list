import React, { createContext, useState} from 'react'
import {useTodos} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){

    const defaultFolder = 'today'
    const [selectedFolder, setSelectedFolder] =useState(defaultFolder)

    const todos = useTodos()

    return(
        <TodoContext.Provider
            value={
                {
                    selectedFolder,
                    setSelectedFolder,

                    todos
                }
            }
        >  
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContextProvider, TodoContext}