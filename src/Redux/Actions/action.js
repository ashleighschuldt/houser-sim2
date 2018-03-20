import { ADD_NAME, ADD_DESCRIPTION, ADD_ADDRESS, ADD_CITY, ADD_STATE, ADD_ZIP, ADD_IMAGE, ADD_LOAN_AMOUNT, ADD_MONTHLY_MORTGAGE, ADD_DESIRED_RENT } from './constraints'; 
import axios from 'axios';

export function updateName(name){
    return {
        type: ADD_NAME,
        payload: name
    }
}

export function updateDescription(description){
    return {
        type: ADD_DESCRIPTION,
        payload: description
    }
}

