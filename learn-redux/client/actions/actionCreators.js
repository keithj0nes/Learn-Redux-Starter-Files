//increment like
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    payload: index
  }
}

//add comment
export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    payload: {postId, author, comment}
  }
}

//remove comment
export function removeComment(postId, index){
  return {
    type: 'REMOVE_COMMENT',
    payload: {postId, index}
  }
}
