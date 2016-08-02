import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const lists = handleActions({
    ['lists/get'](state, action) {
        const { startTime, endTime, onlyMe, page } = action;

        return { ...state, loading: true, filter: Object.assign({}, ...state.filter, { onlyMe }) };
    },
    ['lists/get/success'](state, action) {
        return { ...state, list: action.payload, loading: false };
    },
    ['lists/get/failed'](state, action) {
        return { ...state, err: action.err, loading: false };
    },
    // ['filter/date'](state, action) {
    //     const { startTime, endTime } = action.payload;

    //     return { ...state, filter: Object.assign({}, ...state.filter, {
    //         startTime,
    //         endTime
    //     })};
    // },
    // ['filter/onlyMe'](state, action) {
    //     const { onlyMe } = action.payload;
    //     return { ...state, filter: Object.assign({}, ...state.filter, { onlyMe })};
    // },
    // ['filter/page'](state, action) {
    //     const { page } = action.payload;
    //     return { ...state, filter: Object.assign({}, ...state.filter, { page })};
    // }


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
      filter: {},
      loading: false,
});

export default lists;
