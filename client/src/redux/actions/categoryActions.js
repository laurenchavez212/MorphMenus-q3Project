import axios from 'axios';

export const fetchCategory = () => {
  return dispatch => {
    axios
      .get("http://localhost:8082/CATEGORIES HERE")
      .then(response =>
        dispatch({
          type: FETCH_CATEGORY_SUCCESS,
          payload: response.data
        })
      )
      .catch(err =>
        dispatch({
          type: FETCH_CATEGORY_FAILED,
          payload: err
        })
      );
  };
};

// Identify which MENU ID this category goes in
export const addCategory = category => {
    return dispatch => {
        axios.post('http://localhost:8080/Category HERE', category)
            .then(result => dispatch({
                type: CREATE_CATEGORY_SUCCESS,
                payload: result.data
            }))
            .catch(err => dispatch({
                type: CATEGORY,
                payload: err
            }))
    }
};

export const removeCategory = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_CATEGORY,
      payload: id
    });
  };
};

export const updateCategory = menu => {
    return dispatch => {
        // Identify the correct menu and category
        axios.patch(`http://localhost:8080/Category HERE/${CATEGORY_ID.id}`, category)
        .then(result => dispatch({
            type: UPDATE_CATEGORY_SUCCESS,
            payload: result.data
        }))
        .catch(err => dispatch({
            type: UPDATE_CATEGORY_FAILED,
            payload: err
        }))
    }
};