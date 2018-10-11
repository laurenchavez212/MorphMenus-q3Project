import axios from 'axios';

export const fetchMenu = () => {
    return dispatch => {
        axios
            .get("/menu")
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

// export const addMenu = menu => {
//     return dispatch => {
//         axios.post('http://localhost:8080/MENUS HERE', menu)
//             .then(result => dispatch({
//                 type: CREATE_MENU_SUCCESS,
//                 payload: result.data
//             }))
//             .catch(err => dispatch({
//                 type: CREATE_MENU_FAILED,
//                 payload: err
//             }))
//     }
// };

// export const removeMenu = id => {
//     return dispatch => {
//         dispatch({
//             type: REMOVE_MENU,
//             payload: id
//         });
//     };
// };

// export const updateMenu = menu => {
//     return dispatch => {

//         axios.patch(`http://localhost:8080/MENUS HERE/${MENU_ID.id}`, menu)
//             .then(result => dispatch({
//                 type: UPDATE_MENU_SUCCESS,
//                 payload: result.data
//             }))
//             .catch(err => dispatch({
//                 type: UPDATE_MENU_FAILED,
//                 payload: err
//             }))
//     }
// };