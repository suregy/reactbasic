const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 1,
  age: 17,
};

//reducer => untuk mengupdate sebuah value dari store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      return {
        ...state,
        age: state.age + 1,
      };
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: state.value + action.newValue,
      }; 
    default:
      return state;
  }
};

//strore => sebuah wadah besar untuk menyimpan value secara global
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribtion => proses pemanggilan store yang kita perlukan
store.subscribe(() => {
  console.log('store change : ', store.getState());
});

//Dispatch / Dispathcing Action => untuk memanggil intruksi yang disediakan oleh reducer
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 10 });
console.log(store.getState());
