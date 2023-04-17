import axios from 'axios';
import { fetchDataStart, fetchDataSuccess, fetchDataError } from '../reducers/reducers';

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataStart());
    try {
      const response = await axios.get('https://raw.githubusercontent.com/rYuuXHikaRi/FakeAPI_TugasIndividu4_PAM/main/JadwalPenerbangan.json');
      dispatch(fetchDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchDataError(error.message));
    }
  };
};
