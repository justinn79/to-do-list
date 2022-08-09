import React, {useState} from 'react'
import Modal from '../Modal'
import FolderForm from './FolderForm'

import { Plus } from 'react-bootstrap-icons'

function AddNewFolder() {

    const[showModal, setShowModal] = useState(false)
    const [folderName, setFolderName] = useState('')
    function handleSubmit(e){

    }

    return(
        <div className="AddNewFolder">
            <div className="addFolderButton">
                <span onClick={() => setShowModal(true)}>
                    <Plus size="25" />
                </span>
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal}>
                <FolderForm 
                    handleSubmit={handleSubmit}
                    heading='Add a new Folder!'
                    value={folderName}
                    setValue={setFolderName}
                    setShowModal={setShowModal}
                    confirmButtonText="Add Folder"
                />
            </Modal>

        </div>
    )
}

export default AddNewFolder