import {
  FETCH_MENUS_SUCCESS,
  POST_ITEMS_SUCCESS,
  POST_ITEMS_FAILED,
  DELETE_ITEM,
  EDIT_ITEM,
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
          console.log(action.payload)
      return state.filter(item => item.id !== action.payload);
      case EDIT_ITEM:
          let theOthers = state.filter(item => item.id != action.payload.id)
          console.log("blah", [...theOthers, action.payload].sort((a, b) => a.id > b.id));
          return [...theOthers, action.payload].sort((a, b) => a.id > b.id)
            // return state.map(item => item.id === action.payload.id ? action.payload : item);

    default:
      return state;
  }
};
