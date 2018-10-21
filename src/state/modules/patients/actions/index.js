//export const ping = () => ({ type: 'PING' });

import { createAction } from 'redux-actions';

import patientsActionTypes from '../actionTypes';

export const ping = createAction(
  patientsActionTypes.PING
);

export const fetchPatients = createAction(
  patientsActionTypes.FETCH_PATIENTS
);

export const fetchPatientsCancel = createAction(
  patientsActionTypes.FETCH_PATIENTS_CANCEL
);

export const fetchPatientsFailure = createAction(
  patientsActionTypes.FETCH_PATIENTS_FAILURE
);

export const fetchPatientsRequest = createAction(
  patientsActionTypes.FETCH_PATIENTS_REQUEST
);

export const fetchPatientsSuccess = createAction(
  patientsActionTypes.FETCH_PATIENTS_SUCCESS,
  response => ({ patients: response })
);