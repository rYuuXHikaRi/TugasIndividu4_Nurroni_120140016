import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './actions';

export const fetchData = () => async (dispatch) => {
  dispatch(fetchDataRequest());
  try {
    const response = await axios.get('data.json');
    const data = response.data;
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};
