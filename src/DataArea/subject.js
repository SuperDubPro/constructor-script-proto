// class Subject {
//   constructor() {
//     this.observers = new Set()
//   }
//
//   subscribe(observer) {
//     this.observers.add(observer)
//   }
//
//   unsubscribe(observer) {
//     this.observers = this.observers.delete(observer)
//   }
//
//   emit(action) {
//     this.observers.forEach(observer => {
//       observer.update(action)
//     })
//   }
// }
