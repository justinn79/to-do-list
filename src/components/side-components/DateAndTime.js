import React from 'react'
import moment from 'moment'
import nightsky from '../../images/night-sky.jpg'

function DateAndTime(){

    return(
        <div className="DateAndTime">
            <div className="text">
                <p className="date">{moment().format('dddd, MMMM Do YYYY')}</p>
                <p className="time">{moment().format('h:mm a')}</p>
            </div>
        </div>
    )
}

export default DateAndTime