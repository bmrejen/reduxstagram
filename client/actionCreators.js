export function increment(postId) {
  return {
    type: "INCREMENT_LIKES",
    index: postId,
  };
}

export function addComment(postId, author, comment) {
  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment,
  };
}

export function removeComment(postId, commentId) {
  return {
    type: "REMOVE_COMMENT",
    i: commentId,
    postId,
  };
}
