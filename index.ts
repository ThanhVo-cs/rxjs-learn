import './style.css';

import { of, map, Observable, interval } from 'rxjs';

// tạo observable
const ob = new Observable((observer) => {
  let value = 0;
  const id = setInterval(() => {
    observer.next(value++);
  }, 1000);

  // hủy observable
  return function () {
    clearInterval(id);
  };
});

// cách tạo observable khác
const ob1 = interval(1000);

// call function Observable
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

// nếu unsubcribe trước với 0.5 giấy mà function trong observable là 1 giây
// thì function trong observable sẽ không thực hiện
// setTimeout(() => {
//   subcription.unsubscribe();
// }, 500);

// Promise
//  + chỉ biểu diễn 1 giá trị
//  + sẽ chạy ngay lập tức khi được khởi tạo(Eager loading)
// Observable
//  + biểu diễn được nhiều giá trị(liên tục)
//  + chỉ chạy khi được call subscribe (lazy load)
