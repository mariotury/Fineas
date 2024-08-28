import Typography from '@mui/material/Typography';
import CreatePostForm from 'components/form/CreatePostForm'; 
import { useNavigate } from 'react-router';

import { Grid,  InputLabel, OutlinedInput, FormHelperText, Button } from '@mui/material';



export default function Post() { 
  const navigate = useNavigate();

  const handleSubmit = (newPost) => {
    const post = {
      id: Date.now(),
      content: newPost.body,
      author: "Current User",
      votes: 0,
      date: new Date().toLocaleDateString(),
      tags: newPost.tags,
      title: newPost.title
    };

    navigate('/feed-page', { state: { newPost: post } });
  };




return (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <CreatePostForm onSubmit={handleSubmit} />
    </Grid>
  </Grid>
);
}