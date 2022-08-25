import { useState, useEffect } from 'react'
import firebase from '../firebase'
import moment from 'moment'

export function useTodos(){

    const [todos, setTodos] = useState([])

    useEffect( () => {
        let unsubscribe = firebase
        .firestore()
        .collection('todos')
        .onSnapshot( snapshot => {
            const data = snapshot.docs.map( doc => {
                return {
                    id : doc.id,
                    ...doc.data()
                }
            })
            setTodos(data)
        })

        return () => unsubscribe()
    }, [])

    return todos
}

export function useFilterTodos(todos, selectedFolder){
    const [filteredTodos, setFilteredTodos] = useState([])

    useEffect( () => {
        let data;

        const todayDateFormatted = moment().format('MM/DD/YYYY')
        const todayTimeFormatted = moment().format('h:mm a')
        // console.log(selectedFolder)
        if(selectedFolder === 'today'){
            data = todos.filter(todo => todo.date === todayDateFormatted)
        }
        else if(selectedFolder === 'next 7 days'){
            data = todos.filter( todo => {
                const todoDate = moment(todo.date, 'MM/DD/YYYY')
                const todayDate = moment(todayDateFormatted, 'MM/DD/YYYY')
                const diffDays = todoDate.diff(todayDate, 'days')

                return diffDays >=0 && diffDays < 7
            })
        }
        else if(selectedFolder === 'past due date'){
            data = todos.filter( todo => {
                const todoDate = moment(todo.date, 'MM/DD/YYYY')
                const todayDate = moment(todayDateFormatted, 'MM/DD/YYYY')

                const todoTime = moment(todo.time, 'h:mm a')
                const todayTime = moment(todayTimeFormatted, 'h:mm a')

                const diffDays = todoDate.diff(todayDate, 'days')
                const diffTimes = todoTime.diff(todayTime, 'minutes')

                console.log(diffDays)
                console.log(diffTimes)

                if(diffDays < 0)
                {
                    return true
                }

                else if(diffDays === 0 && diffTimes < 0)
                {
                    return true
                }

                // return diffDays <= 0 && diffTimes < 0
            })
        }
        else if(selectedFolder === 'completed'){
            data = todos.filter( todo => todo.checked === true)
        }
        else{
            data = todos
        }
        setFilteredTodos(data)

    }, [todos, selectedFolder])

    return filteredTodos
}

export const useDate = () => {
    const locale = 'en';
    const [today, setDate] = useState(new Date()); // Save the current date to be able to trigger an update
  
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });
  
    return {
      date,
      time,
      wish,
    };
  };


