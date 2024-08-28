import React from 'react';
import { Typography, Divider } from '@mui/material';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = ({ comments, newComment, setNewComment, handleAddComment }) => (
  <>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Comments</Typography>
    <CommentForm
      newComment={newComment}
      setNewComment={setNewComment}
      handleAddComment={handleAddComment}
    />
    <CommentList comments={comments} />
  </>
);

export default CommentSection;