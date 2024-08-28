import React from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MainCard from 'components/MainCard';
import TagCard from 'components/tags/TagCard';

const tagData = [
  { name: 'Java', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Asycuda', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: '.NET', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Domestic Taxes', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'React', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
    { name: 'Customs', description: 'Java is a high-level object-oriented programming language. Use this tag when youre having problems using or understanding the language itself. This', posts: 200 },
];



const Tags = () => {
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

export default Tags;