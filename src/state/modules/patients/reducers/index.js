import { handleActions } from 'redux-actions';

import patientsActionTypes from '../actionTypes';
import initialState from '../../../initialState';

export const patients = handleActions(
  {
    [patientsActionTypes.FETCH_PATIENTS_SUCCESS]: (
      state,
      action
    ) => ({
      ...state,
      ...action.payload.patients   
    })
  },
  initialState.patients
);

export default patients;
