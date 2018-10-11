import {
  FETCH_ACCOUNTS_SUCCESS
} from "../actions/accountActions";

let initialState = {
  user: {},
  isLoggedIn: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACCOUNTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
