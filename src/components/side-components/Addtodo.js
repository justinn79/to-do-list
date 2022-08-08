import React, {useState} from 'react'
import Modal from '../Modal'

import { X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function AddTodo(){

    const [showModal, setShowModal] = useState(false)
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const [text, setText] = useState('')

    return(
        <div className="AddTodo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    Add New Todo
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form>
                        <div className="text">
                            <h3>Add a new To-do task!</h3>
                            <input
                                type="text"
                                value={text}
                                placeholder='Add new task here'
                                onChange={e => setText(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div className="pick-day">
                            <div className="title">
                                <p>Choose a day</p>
                            </div>
                            <DatePicker 
                                value={day}
                                onChange={day => setDay(day)}
                            />
                        </div>

                        <div className="pick-time">
                            <div className="title">
                                <p>Choose a time</p>
                            </div>
                            <TimePicker 
                                value={time}
                                onChange={time => setTime(time)}    
                            />
                        </div>

                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='35'/>
                        </div>

                        <div className="confirm">
                            <button>Add New Todo!</button>
                        </div>
                    
                    </form>
                </MuiPickersUtilsProvider>
            </Modal>
        </div>
    )
}

export default AddTodo