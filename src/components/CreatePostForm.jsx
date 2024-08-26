import React, {useState} from 'react';
import { Formik, Form, Field } from 'formik';
import { 
  Grid,
  Typography,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
  TextField,
  Box,
  InputAdornment,
  Autocomplete,
  Chip
} from '@mui/material';
import { AttachFile } from '@mui/icons-material';
import MainCard from 'components/MainCard';

const CreatePostForm = () => {
  const initialValues = {
    title: '',
    tags: [],
    body: '',
    file: null
  };
  const [fileName, setFileName] = useState('');


  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  
  };


  return (
    <MainCard title="Create new post">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Title
                </Typography>
                <Field name="title">
                  {({ field }) => (
                    <>
                      <InputLabel htmlFor="title">Be specific and straight to the point.</InputLabel>
                      <OutlinedInput
                        id="title"
                        fullWidth
                        placeholder="Enter a title"
                        {...field}
                      />
                      <FormHelperText>{`${field.value.length}/130 characters`}</FormHelperText>
                    </>
                  )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Tags
                </Typography>
                <InputLabel htmlFor="tags">What technologies are related to your solution.</InputLabel>
                <Field name="tags">
                
                {({ field, form }) => (
       <Autocomplete
       {...field}
       id="tags"
       fullWidth
       multiple
       freeSolo
       options={['Java', 'C#', 'Asycuda']} 
       renderInput={(params) => (
        
         <TextField
           {...params}
           placeholder="Enter tag"
         />
       )}
       onChange={(_, value, reason) => {
         if (reason === 'selectOption') {
           const selectedOption = value[value.length - 1];
           if (!field.value.includes(selectedOption)) {
             form.setFieldValue('tags', [...field.value, selectedOption]);
           }
          else {
           form.setFieldValue('tags', value);
         }
        }
       }}
       onInputChange={(_, value, reason) => {
         if (reason === 'clear') {
           form.setFieldValue('tags', []);
         }
       }}
       filterOptions={(options, state) =>
         options.filter((option) =>
           option.toLowerCase().includes(state.inputValue.toLowerCase())
         )
       }
       value={field.value}
       renderTags={(value, getTagProps) =>
         value.map((option, index) => (
           <Chip
             key={index}
             label={option}
             {...getTagProps({ index })}
             onDelete={() => {
               const newTags = [...field.value];
               newTags.splice(index, 1);
               form.setFieldValue('tags', newTags);
             }}
           />
         ))
       }
       clearOnBlur
     />
    )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Body
                </Typography>
                <Field name="body">
                {({ field }) => (
                <Box sx={{ position: 'relative', mt: 2, mb: 2 }}>
                  <TextField
                    {...field}
                   
                    multiline
                    rows={10}  
                    fullWidth
                    margin="normal"
                  />
                   <Field name="file">
            {({ field, form }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', position: 'absolute', bottom: 8, right: 8 }}>
                {fileName && <Typography variant="body2" sx={{ mr: 1 }}>{fileName}</Typography>}
                <Button
                  component="label"
                  startIcon={<AttachFile />}
                >
                  Upload File
                  <input
                    type="file"
                    onChange={(event) => {
                      const file = event.currentTarget.files[0];
                      form.setFieldValue(field.name, file);
                      setFileName(file ? file.name : '');
                    }}
                    hidden
                  />
                </Button>
              </Box>
            )}
          </Field>
                </Box>
              )}
                </Field>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Create Post
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </MainCard>
  );
};

export default CreatePostForm;

