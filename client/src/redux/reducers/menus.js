import {
  FETCH_MENUS_SUCCESS,
  POST_ITEMS_SUCCESS,
  POST_ITEMS_FAILED,
  DELETE_ITEM
  // CREATE_MENU_SUCCESS,
  // CREATE_MENU_FAILED,
  // UPDATE_MENU_SUCCESS,
  // UPDATE_MENU_FAILED,
  // REMOVE_MENU
} from "../actions/menuActions";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENUS_SUCCESS:
      return action.payload
    case POST_ITEMS_SUCCESS:
      return [...state, action.payload];
    case POST_ITEMS_FAILED:
      return state;
    case DELETE_ITEM:
      return state.filter(item => item.id !== action.payload);

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
