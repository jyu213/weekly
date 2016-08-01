import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const lists = handleActions({
  ['lists/get'](state) {
    return { ...state, loading: true };
  },
  ['lists/get/success'](state, action) {
    return { ...state, list: action.payload, loading: false };
  },
  ['lists/get/failed'](state, action) {
    return { ...state, err: action.err, loading: false };
  },
//   ['lists/delete'](state, action) {
//     const id = action.payload;
//     const newList = state.list.filter(todo => todo.id !== id);
//     return { ...state, list: newList, };
//   },
//   ['lists/create'](state, action) {
//     const text = action.payload;
//     const newTodo = { text, };
//     return { ...state, list: [newTodo, ...state.list], };
//   },
//   ['lists/toggleComplete'](state, action) {
//     const id = action.payload;
//     const newList = state.list.map(todo => {
//       if (id === todo.id) {
//         return { ...todo, isComplete: !todo.isComplete };
//       } else {
//         return todo;
//       }
//     });
//     return { ...state, list: newList, };
//   },
//   ['lists/toggleCompleteAll'](state, action) {
//     const isComplete = action.payload;
//     const newList = state.list.map(todo => ({ ...todo, isComplete }));
//     return { ...state, list: newList, };
//   },
}, {
  list: [],
  loading: false,
});

export default lists;
