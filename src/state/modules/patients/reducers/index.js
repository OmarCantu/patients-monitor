import { handleActions } from 'redux-actions';

import patientsActionTypes from '../actionTypes';
import initialState from '../../../initialState';

export const patientsReducer = handleActions(
  {
    // [patientsActionTypes.FETCH_PATIENTS_SUCCESS]: (
    //   state,
    //   action
    // ) => ({
    //   ...state,
    //   ...action.payload.patients   
    // })
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
