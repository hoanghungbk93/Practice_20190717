import {FETCHED_USER} from './type'
import {RECEIVE_ERROR} from './type'

export const receive_post = (post) => {
  console.log("post", post)
    return {
      type: FETCHED_USER,
      payload: post
    };
};
export const receive_error = () => {
    return {
      type: RECEIVE_ERROR
    };
  };
export const thunk_action_creator = () => {

    return dispatch => {
      return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(data => {
            dispatch(receive_post(data));
        })
        .catch(err => 
          dispatch(receive_error()));
    };
  };