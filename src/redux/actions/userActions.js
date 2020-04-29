import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './userTypes';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});
export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = (data) => (dispatch) => {
  dispatch(fetchUsersRequest());
  axios
    .post('https://knights-bn-backnd.herokuapp.com/api/v1/auth/login', data, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res) => {
      const response = res.data.token;
      dispatch(fetchUsersSuccess(response));
    })
    .catch((error) => {
      console.log('--catch--', JSON.stringify(error.response.data.error));
      const errorMsg = error;
      dispatch(fetchUsersFailure(errorMsg));
    });
};