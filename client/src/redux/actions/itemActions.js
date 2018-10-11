// import axios from 'axios';

// export const fetchItem = () => {
//     return dispatch => {
//         axios
//             .get("http://localhost:8082/ITEMS HERE")
//             .then(response =>
//                 dispatch({
//                     type: FETCH_ITEM_SUCCESS,
//                     payload: response.data
//                 })
//             )
//             .catch(err =>
//                 dispatch({
//                     type: FETCH_ITEM_FAILED,
//                     payload: err
//                 })
//             );
//     };
// };

// // Identify which MENU ID this Item goes in
// export const addItem = item => {
//     return dispatch => {
//         axios
//           .post("http://localhost:8080/Item HERE", item)
//           .then(result =>
//             dispatch({
//               type: CREATE_ITEM_SUCCESS,
//               payload: result.data
//             })
//           )
//           .catch(err =>
//             dispatch({
//               type: CREATE_ITEM_FAILED,
//               payload: err
//             })
//           );
//     }
// };

// export const removeItem = id => {
//     return dispatch => {
//         dispatch({
//             type: REMOVE_ITEM,
//             payload: id
//         });
//     };
// };

// export const updateItem = item => {
//     return dispatch => {
//         // Identify the correct menu and Item
//         axios.patch(`http://localhost:8080/ITEMS HERE/${ITEM_ID.id}`, item)
//             .then(result => dispatch({
//                 type: UPDATE_ITEM_SUCCESS,
//                 payload: result.data
//             }))
//             .catch(err => dispatch({
//                 type: UPDATE_ITEM_FAILED,
//                 payload: err
//             }))
//     }
// };