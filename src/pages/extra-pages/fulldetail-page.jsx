import React from 'react';
import { Typography, Box, Card, CardContent, Button, Divider, IconButton, TextField } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import MainCard from 'components/MainCard';
import UserInfo from 'components/UserInfo';
import { useState } from 'react';


const SolutionContent = ({ content }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="body1" component="pre" style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
        {content}
      </Typography>
    </CardContent>
  </Card>
);

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

  const [comments, setComments] = useState([
    {
      content: `There are mainly two categories of Android applications.
1. System Apps: installed when system is initialized
2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
      name: "John Micheal",
      votes: 15,
      date: "15/07/2024"
    },
    {
      content: `There are mainly two categories of Android applications.
1. System Apps: installed when system is initialized
2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
      name: "John Micheal",
      votes: 16,
      date: "15/07/2024"
    },
    {
      content: `There are mainly two categories of Android applications.
1. System Apps: installed when system is initialized
2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.`,
      name: "John Micheal",
      votes: 17,
      date: "15/07/2024"
    }
  ]);

  const [newComment, setNewComment] = useState('');

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


  const solution = `There are mainly two categories of Android applications.
1. System Apps: installed when system is initialized
2. User Apps: installed from Play store, using ADB or copying .apk file in SD card.
Following are the step by step installation process.
1. AndroidManifest.xml is parsed, information is extracted and stored into /data/system/packages.xml and /data/system/packages.list
2. .apk file is copied to a specific directory and a directory for data storage is created for this app
XML parsing, resource analysis, and .apk file copying are done by PackageManageService.java
however, directory creation is done by installd.c
PackageManageService.java communicates with installd.c via a local socket, located at /dev/socket/installed
Package where .apk file got copied is different for system apps and user apps. for system apps it is /system/app/
Where as for user app .apk file copied in to .apk file is copied to /data/app
.dex file, which is extracted from the .apk file, is copied to /data/dalvik-cache/.
Package Manager creates data directory /data/data// to store database, shared preference, native library and cache data.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mi eros, lacinia quis tellus ac, euismod vulputate velit. Quisque vel turpis vitae augue malesuada faucibus ac non dolor. Curabitur suscipit velit a dolor porta, non iaculis elit tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent ac condimentum magna. Nam risus dolor, porttitor ac convallis vitae, aliquet et odio. Nulla eu quam auctor, porttitor enim et, rhoncus arcu. Curabitur nunc massa, mollis nec vulputate quis, condimentum vel lorem.

Nunc tempus enim nec porta elementum. Etiam vitae ornare massa, ac congue risus. Duis urna lectus, cursus vitae hendrerit vel, tincidunt quis lacus. Vivamus convallis nulla eget massa tempus, ut elementum odio sagittis. Quisque non bibendum metus. Sed eleifend suscipit dui vitae lacinia. Duis efficitur aliquam est sed iaculis. Donec maximus eleifend molestie. Nullam varius enim et suscipit interdum. Ut pharetra condimentum leo, id imperdiet sem tincidunt ut. Mauris et semper mi.

Duis dui neque, bibendum vitae velit semper, commodo lacinia ex. Suspendisse rutrum metus ante, at ultrices mauris maximus ac. Suspendisse fringilla vel turpis a tincidunt. Proin pretium tincidunt dolor. Aliquam erat volutpat. Phasellus feugiat, leo ut faucibus dictum, neque elit tristique metus, ac rutrum mauris ex vel turpis. Morbi ut faucibus leo. Suspendisse potenti. Nulla suscipit in odio a sollicitudin. Morbi accumsan, nisi ut dictum ullamcorper, elit sapien cursus enim, sit amet blandit felis felis sit amet magna. Donec porttitor condimentum sem nec egestas. Integer ullamcorper nunc lobortis, consequat dolor nec, ultrices erat. Curabitur euismod vestibulum rutrum. Maecenas erat dolor, ultrices eget lorem ac, convallis pretium nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut ornare purus mauris.

Proin ut metus vel quam tincidunt hendrerit ut vitae orci. Aliquam vel tempor diam, a venenatis mi. Phasellus tortor nulla, dictum sit amet ipsum sit amet, consequat rutrum magna. Suspendisse et lectus elit. Donec facilisis tempus magna. Maecenas placerat quis nulla sit amet lobortis. Phasellus eleifend, ipsum a euismod eleifend, velit enim cursus ex, in bibendum purus sapien vel ligula. Cras leo orci, rutrum quis pulvinar blandit, sodales et dui. Nulla eget arcu non erat maximus porta.

Duis imperdiet porta tellus nec finibus. Curabitur viverra tincidunt aliquet. Nulla mollis maximus mi, eu fermentum ligula ultrices eget. Morbi quis neque quis tortor malesuada placerat et id odio. Fusce consectetur rutrum placerat. Duis tortor turpis, pellentesque sit amet placerat et, placerat sed leo. Donec in velit eget lectus sollicitudin lacinia id vitae velit. Sed convallis scelerisque porta.
`;


  return (
    <MainCard >
       <Typography variant="h1" gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
        Android Firebase Sign In with Pre-Built UI - Email Link Authentication
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Solution</Typography>
      <SolutionContent content={solution} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <UserInfo name="John Micheal" initialVotes={15} date="15/07/2024" />
        {/* <Button variant="contained" color="primary">+ Add Comment</Button> */}
      </Box>
      <Divider sx={{ my: 3 }} />
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>Comments</Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          sx={{ mb: 1 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handleAddComment}>
            + Add Comment
          </Button>
        </Box>
      </Box>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </MainCard>
  );
};

export default PostDetailPage;