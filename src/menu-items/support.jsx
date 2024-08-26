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
      id: 'sample-page',
      title: 'Home',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'post-page',
      title: 'Post Page',
      type: 'item',
      url: '/post-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'tags-page',
      title: 'Tags',
      type: 'item',
      url: '/tags-page',
      icon: icons.ChromeOutlined
    },
    {
      id: 'fulldetail-page',
      title: 'Details Page',
      type: 'item',
      url: '/fulldetail-page',
      icon: icons.ChromeOutlined
    },
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
