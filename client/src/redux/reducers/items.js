import {
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILED,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILED,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILED,
  REMOVE_ITEM
} from "./itemActions";

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_SUCCESS:
      return action.payload;

    case FETCH_ITEM_FAILED:
      return action.payload;

    case CREATE_ITEM_SUCCESS:
      return [...state, action.payload];

    case CREATE_ITEM_FAILED:
      return state;

    case UPDATE_ITEM_SUCCESS:
      return state.map(
        item => (item.id === action.payload.id ? action.payload : item)
      );

    case UPDATE_ITEM_FAILED:
      return state;

    case REMOVE_ITEM:
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
};
