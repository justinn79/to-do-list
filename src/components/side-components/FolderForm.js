import React from 'react'

function FolderForm({handleSubmit, heading, value, setValue, setShowModal, confirmButtonText}){
    
    return(
        <form className="FolderForm" onSubmit={handleSubmit}>
            <h3>{heading}</h3>
            <input 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type='text'
                placeholder='Name of the Folder...'
                autoFocus
            />

            <button className="cancel" onClick={() => setShowModal(false)}>
                Cancel
            </button>

            <button className="confirm">
                {confirmButtonText}
            </button>

        </form>
    )
}

export default FolderForm