import React, {useState} from 'react'
import Modal from '../Modal'

function AddTodo(){

    const [showModal, setShowModal] = useState(false)

    return(
        <div className="AddTodo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    Add New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <div>
                    test
                    <button onClick={() => setShowModal(false)}>
                        Hide
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default AddTodo