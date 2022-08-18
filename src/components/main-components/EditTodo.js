import React, {useState, useContext, useEffect} from 'react'

// import { X } from 'react-bootstrap-icons'
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TodoContext } from '../../context';
import moment from 'moment';
import firebase from '../../firebase'


function EditTodo(){

    const [day, setDay] = useState()
    const [time, setTime] = useState()
    const [text, setText] = useState('')


    const { selectedTodo } = useContext(TodoContext)

    useEffect(() => {
        if(selectedTodo){
            setText(selectedTodo.text)
            setDay(moment(selectedTodo.date, 'MM/DD/YYYY'))
            setTime(moment(selectedTodo.time, 'hh:mm A'))
        }
    }, [selectedTodo])

    useEffect(() => {
        if(selectedTodo){
            firebase
                .firestore()
                .collection('todos')
                .doc(selectedTodo.id)
                .update({
                    text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A')
                })

        }
    }, [day, time, text])

    return(
        <div className="EditTodo">
            {
                selectedTodo &&
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <form className="EditTodoForm">
                            <div className="text">
                                <h3>Edit a To-do Task</h3>
                                <input
                                    type="text"
                                    value={text}
                                    placeholder='Edit your task here'
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

                            {/* <div className="cancel">
                                <X size='35'/>
                            </div>

                            <div className="confirm">
                                <button>Add New Todo!</button>
                            </div> */}
                        
                        </form>
                    </MuiPickersUtilsProvider>
            }
        </div>
    )
}

export default EditTodo