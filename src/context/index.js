import React, { createContext, useState} from 'react'
import {useFilterTodos, useTodos} from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){

    const defaultFolder = 'today'
    const [selectedFolder, setSelectedFolder] =useState(defaultFolder)

    const todos = useTodos()
    const filteredTodos = useFilterTodos(todos, selectedFolder)

    const [selectedTodo, setSelectedTodo] = useState(undefined)

    return(
        <TodoContext.Provider
            value={
                {
                    selectedFolder,
                    setSelectedFolder,

                    todos : filteredTodos,

                    selectedTodo,
                    setSelectedTodo
                }
            }
        >  
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContextProvider, TodoContext}