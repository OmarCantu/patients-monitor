import { Observable } from 'rxjs/Observable';
import axios from 'axios';

// import { OBSERVABLE_TIMEOUT } from '../constants';
// import _patients from './data/patients';

const api = {
  getPatients() {
    return new Observable(observer => {
      // const timerId = setTimeout(() => {
      //   observer.next(_patients);
      //   observer.complete();
      // }, OBSERVABLE_TIMEOUT);
      // return () => clearTimeout(timerId);

      axios.get('http://localhost:4000/patients')
        .then(response => {
          observer.next(response.data);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }
}

export default api;
