// PostSummary.js
import React from 'react';
import { Typography, Card, CardContent, Box, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import UserInfo from 'components/user/UserInfo';

const PostSummary = ({ id, content, author, votes, date, tags, title }) => {
  const navigate = useNavigate();
  const summaryContent = content.length > 100 ? content.substring(0, 100) + '...' : content;

  const handleClick = () => {
    navigate('/detail-page');
  };

  const handleUserInfoClick = (e) => {
    e.stopPropagation();
  };

  return (
    <Card sx={{ mb: 2, cursor: 'pointer' }} onClick={handleClick}>
      <CardContent>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography variant="body1" component="div" sx={{ mb: 2 }}>
          {summaryContent}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            {tags && tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
            ))}
          </Box>
        </Box> 
        <Box className="user-info" onClick={handleUserInfoClick}>
          <UserInfo name={author} initialVotes={votes} date={date} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PostSummary;