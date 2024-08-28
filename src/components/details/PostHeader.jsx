import React from 'react';
import { Typography, Box } from '@mui/material';
import UserInfo from 'components/user/UserInfo';

const PostHeader = ({ title, author, votes, date }) => (
  <>
    <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
      {title}
    </Typography>
    {/* <Box display="flex" justifyContent="space-between" alignItems="center">
      <UserInfo name={author} initialVotes={votes} date={date} />
    </Box> */}
  </>
);

export default PostHeader;