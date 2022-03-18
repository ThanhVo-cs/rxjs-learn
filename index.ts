import './style.css';

import { of, map, Observable, interval } from 'rxjs';

// tạo observable
const ob = new Observable((observer) => {
  let value = 0;
  const id = setInterval(() => {
    observer.next(value++);
  }, 1000);

  return function () {
    clearInterval(id);
  };
});

const subcription = ob.subscribe({
  next(res) {
    console.log(res);
  },
  error(err) {
    console.error(err);
  },
  complete() {
    console.log('complete');
  },
});

setTimeout(() => {
  subcription.unsubscribe();
}, 5000);
