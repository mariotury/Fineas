import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainCard from 'components/MainCard';

const tagData = [
  { name: 'Java', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Asycuda', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: '.NET', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Domestic Taxes', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'React', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Customs', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
];

const TagCard = ({ name, description, posts }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/sample-page`);
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
          border: '1px solid rgba(0, 123, 255, 0.5)', // Blue border on hover
          '& .MuiCardContent-root': {
            background: 'linear-gradient(45deg, rgba(0, 123, 255, 0.05) 0%, rgba(0, 123, 255, 0) 100%)', // subtle blue gradient
          },
          '& .tag-name': {
            color: 'primary.dark', // Darker shade of primary color on hover
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
          <Typography variant="h5" component="div" >
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

const TagsPage = () => {
  return (
    <MainCard title="Tags">
      <Grid container spacing={3}>
        {tagData.map((tag, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <TagCard {...tag} />
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
};

export default TagsPage;