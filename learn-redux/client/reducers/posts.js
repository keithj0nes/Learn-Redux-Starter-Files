// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current defaultState

function posts(state = [], action){
  switch(action.type){
    case 'INCREMENT_LIKES':
    console.log('incrementing likes');
    console.log(state);
    const i = action.payload;
    console.log(action);
    return [
      ...state.slice(0, i),
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i +1)
    ]
    default:
      return state;
  }
  return state;
}


export default posts;
