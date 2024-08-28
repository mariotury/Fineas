import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TagCard = ({ name, description, posts }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/feed-page`);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid transparent',
        '&:hover': {
          transform: 'translateY(-5px)',
          border: '1px solid rgba(0, 123, 255, 0.5)',
          '& .MuiCardContent-root': {
            background: 'linear-gradient(45deg, rgba(0, 123, 255, 0.05) 0%, rgba(0, 123, 255, 0) 100%)',
          },
          '& .tag-name': {
            color: 'primary.dark',
          },
        },
        '&:active': {
          transform: 'scale(0.98)',
        },
      }}
    >
      <CardActionArea onClick={handleClick} sx={{ height: '100%' }}>
        <CardContent sx={{
          flexGrow: 1,
          transition: 'background 0.3s ease-in-out',
        }}>
          <Typography variant="h5" component="div" className="tag-name">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            {description}
          </Typography>
          <Typography variant="body1" component="div">
            {posts} posts
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TagCard;