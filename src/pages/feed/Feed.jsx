import React, { useState } from 'react';
import { Box, Paper, IconButton, Stack, TextField, InputAdornment, Typography, Chip, Divider, Button } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';


const Post = ({ title, date, description, tags, username }) => {
  const [upvotes, setUpvotes] = useState(2);
  const [downvotes, setDownvotes] = useState(1);

  const handleUpvote = () => {
    setUpvotes(prev => prev + 1);
  };

  const handleDownvote = () => {
    setDownvotes(prev => prev + 1);
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/detail-page');
  };

  return (
    <Paper sx={{ padding: 2, paddingBottom: 1, backgroundColor: '#fff', boxShadow: 'none' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Stack direction="row" alignItems="center">
            <Typography variant="h6">{title}</Typography>
            <Typography variant="caption" sx={{ marginLeft: 2 }}>{date}</Typography>
          </Stack>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {description}
          </Typography>
        </Box>
        <Typography variant="caption">{username}</Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: 1 }}>
        <Box>
          {tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{ marginRight: 1, backgroundColor: '#ece6f0' }}
            />
          ))}
        </Box>
        <Stack direction="row" alignItems="center">
          <IconButton onClick={handleUpvote} sx={{ fontSize: '18px' }}>
            <ArrowUpwardIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography variant="body2">{upvotes}</Typography>
          <IconButton onClick={handleDownvote} sx={{ fontSize: '18px' }}>
            <ArrowDownwardIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <Typography variant="body2">{downvotes}</Typography>
          <IconButton sx={{ fontSize: '18px' }}>
            <ChatBubbleOutlineIcon onClick={handleClick} sx={{ fontSize: '18px' }} />
          </IconButton>
          <IconButton sx={{ fontSize: '18px' }}>
            <ShareIcon sx={{ fontSize: '18px' }} />
          </IconButton>
          <IconButton sx={{ fontSize: '18px' }}>
            <BookmarkBorderIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        </Stack>
      </Stack>
    </Paper>
  );
};

const SamplePage = () => {
  const posts = [
    {
      title: 'How to install asycuda',
      date: '23 Aug 2024',
      description: 'A detailed guide on installing ASYCUDA software on your system.',
      tags: ['java', 'customs', 'asycuda', 'install'],
      username: 'username1',
    },
    {
      title: 'Understanding React Hooks',
      date: '20 Aug 2024',
      description: 'An introduction to React Hooks, including useState and useEffect.',
      tags: ['react', 'javascript', 'hooks'],
      username: 'username2',
    },
    {
      title: 'Setting up a REST API',
      date: '18 Aug 2024',
      description: 'Learn how to set up a REST API using Express and Node.js.',
      tags: ['api', 'rest', 'backend', 'express'],
      username: 'username3',
    }
  ];

  const navigate = useNavigate();
  const handleCreatePost = () => {
    navigate('/post-page');
  };


  return (
    <Box sx={{ padding: 2, backgroundColor: '#fff', minHeight: '100vh' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2, position: 'sticky', top: 0, zIndex: 1, backgroundColor: '#fff' }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <TextField
            placeholder="Hinted search text"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: '20px' },
            }}
            sx={{ width: '300px' }}
          />
          <IconButton sx={{ padding: '8px', backgroundColor: '#E0E0E0', borderRadius: '50%' }}>
            <FilterAltIcon sx={{ fontSize: '18px' }} />
          </IconButton>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          sx={{
            position: 'sticky',
            top: 16,
            right: 16,
            backgroundColor: '#1976d2',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1565c0',
            },
            boxShadow: 'none',
            borderRadius: '5px',
          }}
          onClick={handleCreatePost}
        >
          Add Post
        </Button>
      </Stack>
      <Box sx={{ maxHeight: 'calc(100vh - 80px)', overflowY: 'auto' }}>
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <Post {...post} />
            {index < posts.length - 1 && <Divider sx={{ marginY: 0.5, borderColor: '#e0e0e0' }} />}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default SamplePage;
