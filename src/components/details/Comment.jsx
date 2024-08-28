import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import UserInfo from 'components/user/UserInfo';

const Comment = ({ content, name, votes, date }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="body2">{content}</Typography>
      <UserInfo name={name} initialVotes={votes} date={date} />
    </CardContent>
  </Card>
);

export default Comment;