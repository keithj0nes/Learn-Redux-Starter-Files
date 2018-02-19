// a reducer takes in two things:
// 1. the action (info about what happened)
// 2. a copy of current defaultState

function comments(state = [], action){
  if(action.payload && typeof action.payload.postId !== 'undefined'){
    return {
      //take the current state
      ...state,
      //overwrite this post with a new one
      [action.payload.postId]: postComments(state[action.payload.postId], action)
    }
  }

  return state;
}

function postComments(state=[], action){
  switch(action.type){
    case 'ADD_COMMENT':
    // return existing state with the new comment
    return [...state, {
      user: action.payload.author,
      text: action.payload.comment
    }];
    case 'REMOVE_COMMENT':
    console.log('remvong a comment');
    return [
      ...state.slice(0, action.payload.index),
      ...state.slice(action.payload.index + 1)
    ]
    default:
      return state;
  }
  return state
}


export default comments;
