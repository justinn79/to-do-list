import React, { createContext, useState} from 'react'

const TodoContext = createContext()

function TodoContextProvider({children}){

    const defaultFolder = 'today'
    const [selectedFolder, setSelectedFolder] =useState(defaultFolder)

    return(
        <TodoContext.Provider
            value={
                {
                    selectedFolder,
                    setSelectedFolder
                }
            }
        >  
            {children}
        </TodoContext.Provider>

    )
}

export { TodoContextProvider, TodoContext}