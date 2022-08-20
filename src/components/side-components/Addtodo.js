import React, {useState} from 'react'
import Modal from '../Modal'
import firebase from '../../firebase'
import moment from 'moment'

import { X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function AddTodo(){

    const [showModal, setShowModal] = useState(false)
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const [text, setText] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        if(text){
            firebase
                .firestore()
                .collection('todos')
                .add(
                    {
                        text : text,
                        date : moment(day).format('MM/DD/YYYY'),
                        day : moment(day).format('d'),
                        time : moment(time).format('hh:mm A'),
                        checked : false,

                    }
                )
                setShowModal(false)
                setText('')
                setDay(new Date())
                setTime(new Date())
        }   
    }

    return(
        <div className="AddTodo">
            <div className="btn">
                <button onClick={() => setShowModal(true)}>
                    Add New Todo
                    {/* {console.log(showModal)} */}
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <form onSubmit={handleSubmit}>
                        <div className="text">
                            <h3>Add a new To-do task!</h3>
                            <input
                                type="text"
                                value={text}
                                placeholder='Name of task here...'
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

                        {/* <div className="folders">
                            {
                                folders.map( folder => 
                                    <div
                                        className="folder"
                                        key={folder.id}
                                    >
                                        {folder.name}
                                    </div>
                                
                                )
                            }
                            
                        </div> */}

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