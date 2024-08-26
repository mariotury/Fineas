import Typography from '@mui/material/Typography';
import CreatePostForm from 'components/CreatePostForm'; 

import { Grid,  InputLabel, OutlinedInput, FormHelperText, Button } from '@mui/material';



export default function FormPage() {
return (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <CreatePostForm />
    </Grid>
  </Grid>
);
}