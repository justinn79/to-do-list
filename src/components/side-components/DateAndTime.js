import React from 'react'
import moment from 'moment'
import nightsky from '../../images/night-sky.jpg'
import { useDate } from '../../hooks'

function DateAndTime(){

    const {date, time, wish} = useDate()

    return(
        <div className="DateAndTime">
            <div className="text">
                <p>{wish}</p>
                <p>{date}</p>
                <p>{time}</p>
                {/* <p className="date">{moment().format('dddd, MMMM Do YYYY')}</p>
                <p className="time">{moment().format('h:mm a')}</p> */}
            </div>
        </div>
    )
}

export default DateAndTime