// import { ADD_NAME, ADD_DESCRIPTION, ADD_ADDRESS, ADD_CITY, ADD_STATE, ADD_ZIP, ADD_IMAGE, ADD_LOAN_AMOUNT, ADD_MONTHLY_MORTGAGE, ADD_DESIRED_RENT } from './constraints'; 
// import axios from 'axios';

import { UPDATE_PROPERTY, CLEAR_PROPERTY } from './constraints';

// export function updateName(name){
//     return {
//         type: ADD_NAME,
//         payload: name
//     }
// }

// export function updateDescription(description){
//     return {
//         type: ADD_DESCRIPTION,
//         payload: description
//     }
// }

// export function stepOne(obj){
//     return {
//         type: STEP_ONE,
//         payload: obj
//     }
// }

// export function stepTwo(obj){
//     return {
//         type: STEP_TWO,
//         payload: obj
//     }
// }

// export function stepThree(obj){
//     return {
//         type: STEP_THREE,
//         payload: obj
//     }
// }

export function updateProperty(obj){
    return {
        type: UPDATE_PROPERTY,
        payload: obj
    }
}

export function cancel(){
    return {
        type: CLEAR_PROPERTY,
    }
}