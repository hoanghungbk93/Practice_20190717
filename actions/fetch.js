import FETCHED_USER from "../actions/type"
import RECEIVE_ERROR from "../actions/type"
export const receive_post = post => {
    return {
      type: FETCHED_USER,
      data: post
    };
};
export const receive_error = () => {
    return {
      type: RECEIVE_ERROR
    };
  };
export const thunk_action_creator = () => {

    return function(dispatch, getState) {
      return fetch(`"https://jsonplaceholder.typicode.com/posts"`)
        .then(data => data.json())
        .then(data => {
            dispatch(receive_post(data));
        })
        .catch(err => dispatch(receive_error()));
    };
  };