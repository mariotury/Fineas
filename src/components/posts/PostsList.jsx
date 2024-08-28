// PostsList.js
import React from 'react';
import { Grid } from '@mui/material';
import PostSummary from './PostSummary';

const PostsList = ({ posts }) => {
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Grid item xs={12} key={post.id}>
          <PostSummary {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PostsList;