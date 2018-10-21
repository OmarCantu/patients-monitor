import _patients from './data/patients'
import { Observable } from 'rxjs/Observable'

const TIMEOUT = 100;

const api = {
  getPatients() {
    return new Observable(observer => {
      const timerId = setTimeout(() => {
        observer.next(_patients);
        observer.complete();
      }, TIMEOUT);
      return () => clearTimeout(timerId);
    });
  }
}

export default api;
