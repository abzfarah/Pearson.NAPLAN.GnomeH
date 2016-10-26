//
// import axios from 'axios';
// import thunk from 'redux-thunk';
//
// import {
//     LOAD_SCHOOL_DETAILS,
//     // ---------------
//     // Fetch Actions
//     // ---------------
//     SCHOOL_DETAILS_FETCH,
//     SCHOOL_DETAILS_FETCH_SUCCESS,
//     SCHOOL_DETAILS_FETCH_FAILURE,
//     SCHOOL_DETAILS_SUBMIT,
//     SCHOOL_DETAILS_SUBMIT_SUCCESS,
//     SCHOOL_DETAILS_SUBMIT_FAILURE
//
// } from '../constants';
//
// //-- Get statement
// export function getStatement(schoolCode) {
//
//     return dispatch => {
//
//         dispatch({
//             type: SCHOOL_DETAILS_FETCH,
//             isLoading: true,
//             isLoaded: false
//         });
//
//         return axios.get("http://localhost:3000/getStatment")
//             .then((response) => {
//
//                 dispatch({
//                     type: SCHOOL_DETAILS_FETCH_SUCCESS,
//                     isLoading: false,
//                     isLoaded: true,
//                     statementData: response.data
//                 });
//
//             })
//             .catch((err) => {
//                 // --TODO Handle Error
//                 dispatch({
//                     type: SCHOOL_DETAILS_FETCH_FAILURE,
//                     isLoading: false,
//                     isLoaded: false
//                 })
//             });
//     }
// }
//
//
//
//
// //-- Insert statement
// export function submitStatement(statement) {
//
//     return dispatch => {
//
//         dispatch({
//             type: SCHOOL_DETAILS_SUBMIT,
//             isLoading: true,
//             isLoaded: false
//         });
//
//         return axios.put("http://localhost:3000/submitStatment", statement)
//             .then((response) => {
//                     debugger
//                 dispatch({
//                     type: SCHOOL_DETAILS_SUBMIT_SUCCESS,
//                     isLoading: false,
//                     isLoaded: true,
//                     response: response
//                 })
//                 return response.data;
//             })
//             .catch((error) => {
// // debugger
//                 dispatch({
//                     type: SCHOOL_DETAILS_SUBMIT_FAILURE,
//                     isLoading: false,
//                     isLoaded: false,
//                     error: error
//                 })
//                 //---TODO Handle Error
//             });
//     }
// }
