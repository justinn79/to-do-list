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
        else{
            data = todos
        }
        setFilteredTodos(data)

    }, [todos, selectedFolder])

    return filteredTodos
}


