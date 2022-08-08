import React from 'react'
import { XCircle } from 'react-bootstrap-icons'

function Folder({folder}){
    
    return(
        <div className="Folder">

            <div className="name">
                {folder.name}
            </div>

            <div className="btns">
                {
                    folder.numOfTodos === 0 ? ""
                    
                    :

                    <div className="numoftodos">
                        {folder.numOfTodos}
                    </div>
                }

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