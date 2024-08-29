import React from 'react';
import { Box, TextField, Button } from '@mui/material';

const CommentForm = ({ newComment, setNewComment, handleAddComment }) => (
  <Box sx={{ mb: 2 }}>
    <TextField
      fullWidth
      multiline
      rows={3}
      variant="outlined"
      placeholder="Add a comment..."
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      sx={{ mb: 1 }}
    />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        + Add Comment
      </Button>
    </Box>
  </Box>
);

export default CommentForm;