// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'support',
  // title: 'Support',
  type: 'group',
  children: [
    {
      id: 'feed-page',
      title: 'Feed',
      type: 'item',
      url: '/feed-page',
      icon: icons.ChromeOutlined,
      breadcrumbs: false
    },
    // {
    //   id: 'post-page',
    //   title: 'Post Page',
    //   type: 'item',
    //   url: '/post-page',
    //   icon: icons.ChromeOutlined
    // },
    {
      id: 'tags-page',
      title: 'Tags',
      type: 'item',
      url: '/tags-page',
      icon: icons.ChromeOutlined,
      breadcrumbs: false
    },
    // {
    //   id: 'fulldetail-page',
    //   title: 'Details Page',
    //   type: 'item',
    //   url: '/fulldetail-page',
    //   icon: icons.ChromeOutlined
    // }, 
    // {
    //   id: 'posts-list-page',
    //   title: 'PostList Page',
    //   type: 'item',
    //   url: '/posts-list-page',
    //   icon: icons.ChromeOutlined
    // },
    // {
    //   id: 'documentation',
    //   title: 'Documentation',
    //   type: 'item',
    //   url: 'https://codedthemes.gitbook.io/mantis/',
    //   icon: icons.QuestionOutlined,
    //   external: true,
    //   target: true
    // }
  ]
};

export default support;
