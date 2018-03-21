import {combineReducers} from 'redux';
// import { ADD_NAME, ADD_DESCRIPTION, ADD_ADDRESS, ADD_CITY, ADD_STATE, ADD_ZIP, ADD_IMAGE, ADD_LOAN_AMOUNT, ADD_MONTHLY_MORTGAGE, ADD_DESIRED_RENT } from '../Actions/constraints'; 

import { STEP_ONE, STEP_TWO, STEP_THREE, UPDATE_PROPERTY } from '../Actions/constraints';


function stepOne(state = {}, action){
    switch(action.type){
        case STEP_ONE:
            return action.payload; 
        default: 
            return state
    }
}

function stepTwo(state = {}, action){
    switch(action.type){
        case STEP_TWO:
            return action.payload;
        default:
            return state    
    }
}

function stepThree(state = {}, action){
    switch(action.type){
        case STEP_THREE:
            return action.payload;
        default:
            return state;
    }
}

function property ( state = {}, action){
    switch(action.type){
        case UPDATE_PROPERTY:
            return {...state, ...action.payload}
        default:
            return state;
        }
}


// function updateProperty (state = {
//         name: '',
//         description: '',
//         address: '',
//         city: '',
//         state: '',
//         zip: '',
//         image: '', 
//         loanAmount: '', 
//         monthlyMortgage: '', 
//         desiredRent: ''
// }, action){
//     switch(action.type){
//         case ADD_NAME:
//             return {...state, name: action.payload};
//         case ADD_DESCRIPTION:
//             return {...state, description: action.payload};
//         case ADD_ADDRESS:
//             return {...state, address: action.payload};
//         case ADD_CITY:
//             return {...state, city: action.payload};
//         case ADD_STATE:
//             return {...state, state: action.payload};
//         case ADD_ZIP:
//             return {...state, zip: action.payload};
//         case ADD_IMAGE:    
//             return {...state, image: action.payload};
//         case ADD_LOAN_AMOUNT:
//             return {...state, loanAmount: action.payload};
//         case ADD_MONTHLY_MORTGAGE:
//             return {...state, monthlyMortgage: action.payload};
//         case ADD_DESIRED_RENT:
//             return {...state, desiredRent: action.payload};
//         default: return state;    
                
//     }
// }   

const rootReducer = combineReducers({stepOne, stepTwo, stepThree, property});

export default rootReducer;