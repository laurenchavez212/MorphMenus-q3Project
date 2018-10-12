import axios from 'axios';

export const FETCH_ACCOUNTS_SUCCESS = "FETCH_ACCOUNTS_SUCCESS";

export const fetchAccount = () => {
    return dispatch => {
      axios
        .get("http://localhost:8000/admin/1")
        .then(response => {
          dispatch({
            type: FETCH_ACCOUNTS_SUCCESS,
            payload: response.data
          })

        })
        .catch(err => console.log('err', err))
  };
};