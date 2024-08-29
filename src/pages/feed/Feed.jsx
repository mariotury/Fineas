import React, { useState, useEffect} from 'react';
import { Typography, Button, Card, CardContent, Box, Grid, Pagination, Chip } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import MainCard from 'components/MainCard';
import UserInfo from 'components/user/UserInfo';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; 
import PostsList from 'components/posts/PostsList';

// const PostSummary = ({ id, content, author, votes, date, tags, title }) => {
//   const navigate = useNavigate();
//   const summaryContent = content.length > 100 ? content.substring(0, 100) + '...' : content;

//   const handleClick = () => {
//     // navigate(`/post/${id}`); 

   
//     navigate('/detail-page');
    
//   }; 

//   const handleUserInfoClick = (e) => {
//     e.stopPropagation();
//   };


//   return (
//     <Card sx={{ mb: 2, cursor: 'pointer' }} onClick={handleClick}>
//       <CardContent>
//         <Typography variant="h6" gutterBottom>{title}</Typography>
//         <Typography variant="body1" component="div" sx={{ mb: 2 }}>
//           {summaryContent}
//         </Typography>
//         <Box display="flex" justifyContent="space-between" alignItems="center">
//           <Box>
//             {tags && tags.map((tag, index) => (
//               <Chip key={index} label={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
//             ))}
//           </Box>
//         </Box> 
//         <Box className="user-info" onClick={handleUserInfoClick}>
//           <UserInfo name={author} initialVotes={votes} date={date} />
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

const Feed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([
    { id: 1, title: "Android Firebase Sign In", content: "There are mainly two categories of Android applications. 1. System Apps: installed when system is initialized 2. User Apps: installed from Play store, using ADB or copying .apk file.......", author: "John Micheal", votes: 5, date: "15/07/2024", tags: ["Android", "Firebase"] },
    { id: 2, title: "React Hooks Overview", content: "There are mainly two categories of Android applications. 1. System Apps: installed when system is initialized 2. User Apps: installed from Play store, using ADB or copying .apk file in SD card............", author: "Jane Sandy", votes: 20, date: "13/07/2024", tags: ["React", "JavaScript"] },
    { id: 3, title: "Python Data Structures", content: "There are mainly two categories of Android applications. 1. System Apps: installed when system is initialized 2. User Apps: installed from Play store, using ADB or copying .apk file in SD...........", author: "Jacob Tom", votes: 19, date: "10/07/2024", tags: ["Python", "Data Structures"] },
    { id: 4, title: "React Hooks Overview",  content: "React hooks provide a more direct API to the React concepts you already know. They allow you to reuse stateful logic without changing your component hierarchy...", author: "Emily Chen", votes: 25, date: "18/07/2024", tags: ["React", "JavaScript"]  },
  { id: 5, title: "React Hooks Overview",  content: "Docker containers are lightweight, standalone, executable packages of software that include everything needed to run an application: code, runtime, system tools, system libraries and settings...", author: "Alex Johnson", votes: 15, date: "20/07/2024", tags: ["React", "JavaScript"]  },
  { id: 6,  title: "React Hooks Overview",  content: "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides a complete and understandable description of the data in your API...", author: "Sophia Lee", votes: 30, date: "22/07/2024", tags: ["React", "JavaScript"]  },
  { id: 7, title: "React Hooks Overview",  content: "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications. It groups containers that make up an application into logical units for easy management and discovery...", author: "Michael Brown", votes: 22, date: "24/07/2024", tags: ["React", "JavaScript"]  },
  { id: 8, title: "React Hooks Overview",  content: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers optional static typing, classes, and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors as you type the code...", author: "Sarah Davis", votes: 18, date: "26/07/2024", tags: ["React", "JavaScript"]  },
  { id: 9, title: "React Hooks Overview",  content: "Machine Learning is a subset of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. It focuses on the development of computer programs that can access data and use it to learn for themselves...", author: "David Wilson", votes: 35, date: "28/07/2024", tags: ["React", "JavaScript"]  },
  { id: 10,  title: "React Hooks Overview",  content: "RESTful APIs are based on Representational State Transfer (REST) architecture. When a client request is made via a RESTful API, it transfers a representation of the state of the resource to the requester or endpoint...", author: "Emma Taylor", votes: 28, date: "30/07/2024", tags: ["React", "JavaScript"]  },
]);
  

  useEffect(() => {
    if (location.state && location.state.newPost) {
      setPosts(prevPosts => [location.state.newPost, ...prevPosts]);
      window.history.replaceState({}, document.title);
    }
  }, [location]);


  

  const handleCreatePost = () => {
    navigate('/post-page');
  };


  return (
    <MainCard>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Posts</Typography>
        <Button variant="contained" color="primary" onClick={handleCreatePost}>
          + Create Post
        </Button>
      </Box>
      <PostsList posts={posts} />
    </Box>
    </MainCard>
  );
};

export default Feed;