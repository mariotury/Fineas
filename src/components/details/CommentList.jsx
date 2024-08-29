import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => (
  <>
    {comments.map((comment, index) => (
      <Comment key={index} {...comment} />
    ))}
  </>
);

export default CommentList;