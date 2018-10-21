// export const patientsEpic = action$ =>
//   action$.ofType('PING')
//     .delay(1000) // Asynchronously wait 1000ms then continue
//     .mapTo({ type: 'PONG' });


import * as patientsActions from '../../modules/patients/actions';
import patientsActionTypes from '../../modules/patients/actionTypes';
import requests from '../../../api/services/patients/getPatients.request';

export const patientsEpic = action$ =>
  action$.ofType(patientsActionTypes.FETCH_PATIENTS)
    .switchMap(() =>
      requests.getPatients()
        .map(response =>
          patientsActions.fetchPatientsSuccess(response)
        )
        .catch(error =>
          patientsActions.fetchPatientsFailure(error)
        )
        .takeUntil(
          action$.ofType(patientsActionTypes.FETCH_PATIENTS_CANCEL)
        )
        .startWith(patientsActions.fetchPatientsRequest())
      );
