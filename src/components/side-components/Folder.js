import React, {useContext} from 'react'
import { XCircle } from 'react-bootstrap-icons'

import { TodoContext } from '../context'

function Folder({folder}){

    const { setSelectedFolder } = useContext(TodoContext)
    
    return(
        <div className="Folder">

            <div 
                className="name"
                onClick={ () => setSelectedFolder(folder.name)}
            >
                {folder.name}
            </div>

            <div className="todoCount">
                {
                    folder.numOfTodos === 0 ? ""
                    
                    :

                    <div className="numoftodos">
                        {folder.numOfTodos}
                    </div>
                }
            </div>

            <div className="btns">

                    <div className="delete">
                    <span>
                        <XCircle size="15" />
                    </span>
                    
                </div>
            </div>
        </div>
    )
}

export default Folder