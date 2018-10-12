import axios from 'axios';

export const FETCH_MENUS_SUCCESS = "FETCH_MENUS_SUCCESS";
export const FETCH_MENUS_FAILED = "FETCH_MENUS_FAILED";

export const POST_ITEMS_SUCCESS = "POST_ITEMS_SUCCESS";
export const POST_ITEMS_FAILED = "POST_ITEMS_FAILED";

export const DELETE_ITEM = "DELETE_ITEM";
export const EDIT_ITEM = "EDIT_ITEM";

export const fetchMenu = () => {
    return dispatch => {
        axios
            .get("http://localhost:8000/menu/1")
            .then(response =>
                dispatch({
                    type: FETCH_MENUS_SUCCESS,
                    payload: response.data
            })
          )
          .catch(err =>
            dispatch({
              type: FETCH_MENUS_FAILED,
              payload: err
            })
          );
    };
};

export const postItems = (item) => {
    return dispatch => {
        axios
          .post("http://localhost:8000/menu/1", item)
          .then(response =>
            dispatch({
              type: POST_ITEMS_SUCCESS,
              payload: response.data
            })
          )
          .catch(err =>
            dispatch({
              type: POST_ITEMS_FAILED,
              payload: err
            })
          );
    }
}

export const deleteItem = (id) => {
    return dispatch => {
        axios
          .delete(`http://localhost:8000/menu/${id}`)
          .then(response =>
            dispatch({
              type: DELETE_ITEM,
              payload: response.data
            })
          );
    }
}

// export const editItem = (item) => {
//     return dispatch => {
//         axios.patch("http://localhost:8000/menu/1", item)
//         .then(response => dispatch ({
//             type: EDIT_ITEM,
//             payload: response.data
//         }))
//     }
// }