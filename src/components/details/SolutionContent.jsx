import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SolutionContent = ({ content }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
        {content}
      </Typography>
    </CardContent>
  </Card>
);

export default SolutionContent;