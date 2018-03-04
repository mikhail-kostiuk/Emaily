import axios from 'axios';
import { FETCH_USER } from './actionTypes';

const fetchUser = () =>
  function (dispatch) {
    axios.get('/api/current_user').then(res => dispatch({ type: FETCH_USER, payload: res }));
  };
