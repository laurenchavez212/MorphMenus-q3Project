import {
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILED
    // CREATE_MENU_SUCCESS,
    // CREATE_MENU_FAILED,
    // UPDATE_MENU_SUCCESS,
    // UPDATE_MENU_FAILED,
    // REMOVE_MENU
} from "./menuActions";

let initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_SUCCESS:
            return action.payload;

        case FETCH_MENU_FAILED:
            return action.payload;

        // case CREATE_MENU_SUCCESS:
        //     return [...state, action.payload];

        // case CREATE_MENU_FAILED:
        //     return state;

        // case UPDATE_MENU_SUCCESS:
        //     return state.map(menu => menu.id === action.payload.id ? action.payload : menu);

        // case UPDATE_MENU_FAILED:
        //     return state;

        // case REMOVE_MENU:
        //     return state.filter(menu => menu.id !== action.payload);

        default:
            return state;
    }
};
