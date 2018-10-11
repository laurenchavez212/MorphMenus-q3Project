// import {
//   FETCH_CATEGORY_SUCCESS,
//   FETCH_CATEGORY_FAILED,
//   CREATE_CATEGORY_SUCCESS,
//   CREATE_CATEGORY_FAILED,
//   UPDATE_CATEGORY_SUCCESS,
//   UPDATE_CATEGORY_FAILED,
//   REMOVE_CATEGORY
// } from "./categoryActions";

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_CATEGORY_SUCCESS':
            return action.payload;
        
        case 'FETCH_CATEGORY_FAILED':
            return action.payload;
        
        case 'CREATE_CATEGORY_SUCCESS':
            return [...state, action.payload];

        case 'CREATE_CATEGORY_FAILED':
            return state;
        
        case 'UPDATE_CATEGORY_SUCCESS':
            return state.map(category => category.id === action.payload.id ? action.payload : category);
        
        case 'UPDATE_CATEGORY_FAILED':
            return state;
        
        case 'REMOVE_CATEGORY':
            return state.filter(category => category.id !== action.payload);
            
        default:
            return state;
    }
};
