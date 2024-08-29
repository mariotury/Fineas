import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Card, CardContent, Button, Divider, IconButton, TextField } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import MainCard from 'components/MainCard';
import UserInfo from 'components/user/UserInfo';
import PostHeader from 'components/details/PostHeader'; 
import SolutionContent from 'components/details/SolutionContent';
import CommentSection from 'components/details/CommentSection';

// import { useState } from 'react';


// const SolutionContent = ({ content }) => (
//   <Card variant="outlined">
//     <CardContent>
//       <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
//         {content}
//       </Typography>
//     </CardContent>
//   </Card>
// );

// const UserInfo = ({ name, votes, date }) => (
//   <Box display="flex" alignItems="center" justifyContent="flex-start" mt={2} mb={2}>
//     <Typography variant="body2">{name}</Typography>
//     <Box display="flex" alignItems="center">
//       <IconButton size="small"><ArrowUpward /></IconButton>
//       <Typography variant="body2">{votes}</Typography>
//       <IconButton size="small"><ArrowDownward /></IconButton>
//       <Typography variant="body2" ml={2}>{date}</Typography>
//     </Box>
//   </Box>
// );

const Comment = ({ content, name, votes, date }) => (
  <Card variant="outlined" sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="body2">{content}</Typography>
      <UserInfo name={name} initialVotes={votes} date={date} />
    </CardContent>
  </Card>
);

const PostDetailPage = () => {

//   const [comments, setComments] = useState([
//     {
//       content: `There are mainly two categories of Android applications.
// 1. System Apps: installed when system is initialized
// 2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
//       name: "John Micheal",
//       votes: 15,
//       date: "15/07/2024"
//     },
//     {
//       content: `There are mainly two categories of Android applications.
// 1. System Apps: installed when system is initialized
// 2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
//       name: "John Micheal",
//       votes: 16,
//       date: "15/07/2024"
//     },
//     {
//       content: `There are mainly two categories of Android applications.
// 1. System Apps: installed when system is initialized
// 2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
//       name: "John Micheal",
//       votes: 17,
//       date: "15/07/2024"
//     }
//   ]);

//   const [newComment, setNewComment] = useState('');  

const { id } = useParams();
const navigate = useNavigate();
const [post, setPost] = useState(null);
const [comments, setComments] = useState([]);
const [newComment, setNewComment] = useState('');

useEffect(() => {
  // Fetch post data based on id
  // This is a mock implementation. Replace with actual API call.
  const fetchPost = async () => {
    // Simulating API call
    const mockPost = {
      id: id,
      title: "Android Firebase Sign In with Pre-Built UI - Email Link Authentication",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia urna ut purus egestas aliquam. Suspendisse id porta mauris. Suspendisse vel nisi mi. Fusce efficitur sapien eget enim faucibus, non vestibulum nunc porttitor. Sed vitae leo nulla. Etiam vel nisi nec erat convallis rutrum. Aenean sit amet tortor nisi. Quisque quam lectus, luctus id risus non, interdum vehicula diam. Ut lobortis magna in lacus vehicula, sit amet tincidunt sapien facilisis. Proin aliquet, est lacinia sodales vulputate, massa ipsum malesuada velit, eget ornare urna erat sed ex. Ut aliquam placerat congue. Donec et enim mauris. Nunc sed suscipit nibh. Donec auctor mattis ligula sit amet tincidunt. In laoreet viverra ullamcorper. Nulla efficitur sit amet sem nec consectetur.

Phasellus sit amet pretium lacus. Vestibulum sollicitudin dui quis felis feugiat feugiat. Quisque mauris massa, auctor non orci vitae, malesuada malesuada elit. Nulla eu auctor elit, id interdum mauris. Pellentesque ac lacus orci. Ut interdum erat at cursus tempor. Nulla non laoreet libero. Phasellus et posuere turpis, maximus maximus lectus. Integer id nulla vehicula lorem feugiat mollis at vel sapien. Etiam quis tincidunt sem. Integer turpis urna, vestibulum at maximus nec, fermentum sit amet risus.

Phasellus tristique diam nibh, feugiat interdum leo pulvinar ac. Fusce ac ex vitae lorem rutrum imperdiet ut vel orci. Phasellus lobortis convallis ligula eget lacinia. Etiam cursus quis neque eu feugiat. Mauris elementum ac tellus id accumsan. Proin et ante mi. Donec posuere fermentum libero sed euismod. Duis malesuada congue fringilla.

Integer in varius massa. Nulla condimentum viverra auctor. Donec ultrices faucibus nulla at placerat. Nulla purus velit, dignissim et egestas quis, aliquam eu nulla. Praesent finibus nulla purus, in consectetur risus interdum vel. Sed in lectus in orci venenatis lobortis ut ut purus. Quisque suscipit aliquet mi et volutpat. Nulla tincidunt risus eu elit congue, sit amet laoreet velit tincidunt. Proin nec imperdiet diam. Vivamus in massa vehicula, convallis risus vel, dapibus mi. Phasellus eu orci ac neque porttitor ultricies nec vel orci. Suspendisse eget velit vel libero mattis convallis. Cras egestas tortor leo, at viverra nisl pulvinar quis. Mauris quis mollis augue.

Integer eleifend, ante in sodales porttitor, urna lacus rutrum tortor, quis pharetra nisl ex vel elit. Fusce semper, urna nec feugiat congue, leo nulla scelerisque enim, vel ornare nunc nulla vitae orci. Mauris nibh tortor, rutrum ut rutrum a, hendrerit bibendum orci. Integer aliquet id est at placerat. Nullam et dignissim magna. Nam efficitur urna lacus, eget facilisis nulla sodales nec. Integer quis ligula velit.

Suspendisse a scelerisque nisl, eget porta mauris. Donec interdum risus sit amet lorem commodo porta. Cras vitae nisi eleifend, luctus augue in, condimentum ipsum. Aliquam erat volutpat. Sed ac feugiat ex. Nullam ac aliquam lacus. Maecenas vehicula fermentum tristique. Nulla semper dui at ipsum gravida volutpat. Nam quis libero ipsum. Phasellus vel purus vitae lectus convallis tincidunt eget et ante. Pellentesque sagittis nisl eget enim tristique, ac tincidunt sapien suscipit. Nullam imperdiet enim felis, ac pretium metus ullamcorper id. Nullam aliquam nec nunc et ullamcorper. Cras non lectus ac sem lobortis congue vitae a dolor. Sed eu massa quis est luctus ultrices.

Nullam mattis felis ut sem posuere porttitor. Ut at laoreet mauris. Phasellus fermentum nunc orci, id facilisis arcu scelerisque vitae. Donec erat orci, euismod at lacus eget, gravida lobortis mi. Curabitur accumsan sodales elit quis tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel ligula nec odio scelerisque gravida in ornare enim.

Aenean sit amet risus sapien. Praesent dictum nibh lorem, sit amet aliquam eros luctus ut. Integer efficitur sollicitudin augue vel vestibulum. Suspendisse condimentum, turpis ut mattis pretium, arcu magna sodales libero, a tincidunt libero mi et quam. Suspendisse pharetra sed sem ac mattis. Mauris lacinia, justo eget malesuada auctor, velit lectus facilisis lectus, eu maximus lorem orci venenatis nisl. Duis ullamcorper ac sapien quis faucibus. Ut cursus finibus venenatis. Aenean vitae lacus sed nibh ultricies ornare. Aliquam erat volutpat.

Aliquam cursus accumsan neque at porta. Suspendisse potenti. Praesent eu eros elit. Cras mattis pulvinar porttitor. Donec viverra posuere odio, ut imperdiet ante accumsan ac. Nullam dolor lorem, mattis ut eros quis, pellentesque pulvinar lectus. Donec aliquam sem iaculis turpis rutrum, at tincidunt nulla placerat. Vestibulum rhoncus ut tellus lobortis dapibus.

Praesent ut finibus erat. Nullam pulvinar, ante nec dictum convallis, ante ipsum finibus dolor, at suscipit nunc lectus et velit. Suspendisse ut egestas lectus, id fermentum turpis. Nunc magna lacus, finibus at augue nec, condimentum consequat enim. Vivamus eleifend justo at suscipit accumsan. Aliquam interdum dui eu vestibulum bibendum. Nullam sit amet quam metus. Etiam imperdiet, est eget posuere dapibus, leo dui viverra metus, at sodales ante augue quis massa. Mauris rutrum odio sit amet massa viverra euismod. Nunc ac purus orci. Vestibulum rutrum hendrerit mi ut suscipit. Maecenas ultricies aliquet venenatis. Vivamus in orci mi.`,
      author: "John Micheal",
      votes: 15,
      date: "15/07/2024",
      comments: [
        { content: "Great post!", name: "Jane Doe", votes: 5, date: "16/07/2024" },
        { content: "Very informative", name: "John Smith", votes: 3, date: "17/07/2024" }
      ]
    };
    setPost(mockPost);
    setComments(mockPost.comments);
  };

  fetchPost();
}, [id]);

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        content: newComment,
        name: "Jane Mary",
        votes: 0,
        date: new Date().toLocaleDateString()
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  if (!post) return <Typography>Loading...</Typography>;

//   const solution = `There are mainly two categories of Android applications.
// 1. System Apps: installed when system is initialized
// 2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.
// Following are the step by step installation process.
// 1. AndroidManifest.xml is parsed, information is extracted and stored into /data/system/packages.xml and /data/system/packages.list
// 2. .apk file is copied to a specific directory and a directory for data storage is created for this app
// XML parsing, resource analysis, and .apk file copying are done by PackageManageService.java
// however, directory creation is done by installd.c
// PackageManageService.java communicates with installd.c via a local socket, located at /dev/socket/installed
// Package where .apk file got copied is different for system apps and user apps. for system apps it is /system/app/
// Where as for user app .apk file copied in to .apk file is copied to /data/app
// .dex file, which is extracted from the .apk file, is copied to /data/dalvik-cache/.
// Package Manager creates data directory /data/data// to store database, shared preference, native library and cache data.
// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi eros, lacinia quis tellus ac, euismod vulputate velit. Quisque vel turpis vitae augue malesuada faucibus ac non dolor. Curabitur suscipit velit a dolor porta, non iaculis elit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac condimentum magna. Nam risus dolor, porttitor ac convallis vitae, aliquet et odio. Nulla eu quam auctor, porttitor enim et, rhoncus arcu. Curabitur nunc massa, mollis nec vulputate quis, condimentum vel lorem.

// Nunc tempus enim nec porta elementum. Etiam vitae ornare massa, ac congue risus. Duis urna lectus, cursus vitae hendrerit vel, tincidunt quis lacus. Vivamus convallis nulla eget massa tempus, ut elementum odio sagittis. Quisque non bibendum metus. Sed eleifend suscipit dui vitae lacinia. Duis efficitur aliquam est sed iaculis. Donec maximus eleifend molestie. Nullam varius enim et suscipit interdum. Ut pharetra condimentum leo, id imperdiet sem tincidunt ut. Mauris et semper mi.

// Duis dui neque, bibendum vitae velit semper, commodo lacinia ex. Suspendisse rutrum metus ante, at ultrices mauris maximus ac. Suspendisse fringilla vel turpis a tincidunt. Proin pretium tincidunt dolor. Aliquam erat volutpat. Phasellus feugiat, leo ut faucibus dictum, neque elit tristique metus, ac rutrum mauris ex vel turpis. Morbi ut faucibus leo. Suspendisse potenti. Nulla suscipit in odio a sollicitudin. Morbi accumsan, nisi ut dictum ullamcorper, elit sapien cursus enim, sit amet blandit felis felis sit amet magna. Donec porttitor condimentum sem nec egestas. Integer ullamcorper nunc lobortis, consequat dolor nec, ultrices erat. Curabitur euismod vestibulum rutrum. Maecenas erat dolor, ultrices eget lorem ac, convallis pretium nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare purus mauris.

// Proin ut metus vel quam tincidunt hendrerit ut vitae orci. Aliquam vel tempor diam, a venenatis mi. Phasellus tortor nulla, dictum sit amet ipsum sit amet, consequat rutrum magna. Suspendisse et lectus elit. Donec facilisis tempus magna. Maecenas placerat quis nulla sit amet lobortis. Phasellus eleifend, ipsum a euismod eleifend, velit enim cursus ex, in bibendum purus sapien vel ligula. Cras leo orci, rutrum quis pulvinar blandit, sodales et dui. Nulla eget arcu non erat maximus porta.

// Duis imperdiet porta tellus nec finibus. Curabitur viverra tincidunt aliquet. Nulla mollis maximus mi, eu fermentum ligula ultrices eget. Morbi quis neque quis tortor malesuada placerat et id odio. Fusce consectetur rutrum placerat. Duis tortor turpis, pellentesque sit amet placerat et, placerat sed leo. Donec in velit eget lectus sollicitudin lacinia id vitae velit. Sed convallis scelerisque porta.
// `;


//   return (
//     <MainCard >
//        <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
//         Android Firebase Sign In with Pre-Built UI - Email Link Authentication
//       </Typography>
//       <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Solution</Typography>
//       <SolutionContent content={solution} />
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <UserInfo name="John Micheal" initialVotes={15} date="15/07/2024" />
//         {/* <Button variant="contained" color="primary">+ Add Comment</Button> */}
//       </Box>
//       <Divider sx={{ my: 3 }} />
//       <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Comments</Typography>
//       <Box sx={{ mb: 2 }}>
//         <TextField
//           fullWidth
//           multiline
//           rows={3}
//           variant="outlined"
//           placeholder="Add a comment..."
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           sx={{ mb: 1 }}
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//           <Button variant="contained" color="primary" onClick={handleAddComment}>
//             + Add Comment
//           </Button>
//         </Box>
//       </Box>
//       {comments.map((comment, index) => (
//         <Comment key={index} {...comment} />
//       ))}
//     </MainCard>
//   );
// };

return (
  <MainCard>
     <PostHeader title={post.title} />
    <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Solution</Typography>
    <SolutionContent content={post.content} />
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <UserInfo name={post.author} initialVotes={post.votes} date={post.date} />
      {/* <Button variant="contained" color="primary" onClick={() => navigate('/posts-list-page')}>Back to Posts</Button> */}
    </Box>
    <CommentSection
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
      />
  </MainCard>
);
};

export default PostDetailPage;