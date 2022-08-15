import React from 'react'
import AddNewFolder from './AddNewFolder'
import Folder from './Folder'

function TodoFolders(){

    const folders = [
        // { id : 1, name: "work-related", numOfTodos : 0},
        // { id : 2, name: "fun things", numOfTodos : 1},
        // { id : 3, name: "chores", numOfTodos : 2},

    ]

    return(
        <div className="TodoFolders">

            <div className="header">
                <div className="title">
                    <p>To-do Folders</p>
                </div>

                <div className="btns">
                    <span className="addFolderButton">
                        <AddNewFolder />
                    </span>
                </div>
            
            </div>


            <div className="items">
                {
                    folders.map( folder =>
                        <Folder 
                            folder={folder}
                            key={folder.id}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default TodoFolders