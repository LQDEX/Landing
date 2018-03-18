/* eslint-disable */
import axios from 'axios';


const getRequest = (url, params) => new Promise((resolve, reject) => {
  axios
    .get(url, params)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err || err.message);
    });
});

const postRequest = (url, params) => new Promise((resolve, reject) => {
  axios
    .post(url, params)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err || err.message);
    });
});

const putRequest = (url, params) => new Promise((resolve, reject) => {
  axios
    .put(url, params)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err || err.message);
    });
});

const deleteRequest = url => new Promise((resolve, reject) => {
  axios
    .delete(url)
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err || err.message);
    });
});

export default {
  post: (url, body, actionType) => dispatch => postRequest(url, body)
    .then(data => {
      if (actionType !== null) {
        dispatch({
          type: actionType,
          data
        });
      }

      return data;
    })
    .catch(err => {
      throw err;
    }),

  get: (url, params, actionType) => dispatch => getRequest(url, params)
    .then(data => {
      if (actionType !== null) {
        dispatch({
          type: actionType,
          data
        });
      }

      return data;
    })
    .catch(err => {
      throw err;
    }),

  put: (url, params, actionType) => dispatch => putRequest(url, params)
    .then(data => {
      if (actionType !== null) {
        dispatch({
          type: actionType,
          data
        });
      }

      return data;
    })
    .catch(err => {
      throw err;
    }),

  delete: (url, actionType) => dispatch => deleteRequest(url)
    .then(data => {
      if (actionType !== null) {
        dispatch({
          type: actionType,
          data
        });
      }

      return data;
    })
    .catch(err => {
      throw err;
    })
};