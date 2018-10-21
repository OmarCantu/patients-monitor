export default (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };

    case 'PONG':
      return { isPinging: false };

    default:
      return state;
  }
};

/* import { handleActions } from 'redux-actions';

import patientsActionTypes from '../actionTypes';
import initialState from '../../initialState';

export const patients = handleActions(
  {
    [patientsActionTypes.FETCH_PATIENTS_SUCCESS]: (
      state,
      action
    ) => state.merge(action.payload.patients)
  },
  initialState.patients
);

export default patients; */
