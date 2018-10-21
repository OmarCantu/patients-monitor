import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { patientsEpic } from './state/epics/patients';
import { patientsReducer } from './state/modules/patients/reducers';

const epicMiddleware = createEpicMiddleware(patientsEpic);

export default createStore(
  patientsReducer,
  applyMiddleware(epicMiddleware)
);
