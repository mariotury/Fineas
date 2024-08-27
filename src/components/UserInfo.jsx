import React, { useState } from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const UserInfo = ({ name, initialVotes, date }) => {
  const [votes, setVotes] = useState(initialVotes);

  const handleUpvote = () => {
    setVotes(prevVotes => prevVotes + 1);
  };

  const handleDownvote = () => {
    setVotes(prevVotes => prevVotes - 1);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
      <Typography variant="body2">{name}</Typography>
      <Box display="flex" alignItems="center">
        <IconButton size="small" onClick={handleUpvote}><ArrowUpward /></IconButton>
        <Typography variant="body2">{votes}</Typography>
        <IconButton size="small" onClick={handleDownvote}><ArrowDownward /></IconButton>
        <Typography variant="body2" ml={2}>{date}</Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;