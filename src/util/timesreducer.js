import { useReducer } from "react";
import { fetchAPI } from "./api";

function initializeTimes() {
    const result = fetchAPI(new Date());
    const yesterday = new Date(); 
    yesterday.setDate(yesterday.getDate() - 1);
    return { availableTimes: result, selectedDate: yesterday};
}

function updateTimes(state, action) {
    //switch(action.type)
    switch(action.type){
     case 'SET_DATE':
        const result = fetchAPI(new Date(action.date));
        return  {...state, availableTimes: result, selectedDate: new Date(action.date)};
     default:
        return state;
    }
}

export function useAvailableTimes() {
    const [state, dispatch] = useReducer(updateTimes, initializeTimes());
    // Define action creators
    // const updateTimes = (newTimes) => {
    //     dispatch({ type: 'UPDATE_TIMES', payload: newTimes });
    // };
    // Return the state and action creators
    return [state, dispatch];
}