import * as patientsActions from '../../modules/patients/actions';
import api from '../../../api';
import patientsActionTypes from '../../modules/patients/actionTypes';

export const patientsEpic = action$ =>
  action$.ofType(patientsActionTypes.FETCH_PATIENTS)
    .switchMap(() =>
      api.getPatients()
        .map(response => {
          const x = response;
          // debugger 
          return patientsActions.fetchPatientsSuccess(response)
        })
        .catch(error =>
          patientsActions.fetchPatientsFailure(error)
        )
        .takeUntil(
          action$.ofType(patientsActionTypes.FETCH_PATIENTS_CANCEL)
        )
        .startWith(patientsActions.fetchPatientsRequest())
      );
