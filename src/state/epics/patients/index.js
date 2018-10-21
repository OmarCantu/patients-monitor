// export const patientsEpic = action$ =>
//   action$.ofType('PING')
//     .delay(1000) // Asynchronously wait 1000ms then continue
//     .mapTo({ type: 'PONG' });


import * as patientsActions from '../../modules/patients/actions';
import api from '../../../api';
import patientsActionTypes from '../../modules/patients/actionTypes';

export const patientsEpic = action$ =>
  action$.ofType(patientsActionTypes.FETCH_PATIENTS)
    .switchMap(() =>
      api.getPatients()
        .map(response => {
            console.log(response);
            
            return patientsActions.fetchPatientsSuccess(response)
          }
        )
        .catch(error =>
          patientsActions.fetchPatientsFailure(error)
        )
        .takeUntil(
          action$.ofType(patientsActionTypes.FETCH_PATIENTS_CANCEL)
        )
        .startWith(patientsActions.fetchPatientsRequest())
      );


// import 'rxjs';
// import { Observable } from 'rxjs/Observable';
// import { combineEpics } from 'redux-observable';
// import { getCart } from '../reducers';
// import { api } from '../services';
// import * as actions from '../actions';

// /**
//  * search products epic
//  * @param action$
//  * @param store
//  * @returns {any|*|Observable}
//  */
// const searchProducts = (action$) => {
//   return action$
//     .ofType(actions.GET_ALL_PRODUCTS).switchMap(q => {
//       /*
//         * This example uses the same api of the redux-saga example, thus
//         * it adapts a Promise to an Observable.
//         */
//       return api.getProducts().map(actions.receiveProducts)
//     });
// };

// /**
//  * checkout epic.
//  * @param action$
//  * @param store
//  * @returns {any|*|Observable}
//  */
// const checkout = (action$,store) => {
//   return action$
//     .ofType(actions.CHECKOUT_REQUEST).switchMap(q => {
//       const cart = getCart(store.getState());
//       return api.buyProducts(cart)
//         .map(cart => actions.checkoutSuccess(cart))
//         .catch(error => Observable.of(actions.checkoutFailure(error)))
//     });
// };


// export const rootEpic = combineEpics(
//   searchProducts,
//   checkout
// );
      
      
      
      
      