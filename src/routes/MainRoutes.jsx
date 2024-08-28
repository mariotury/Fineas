import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const PostPage = Loadable(lazy(() => import('pages/post/Post')));
const TagsPage = Loadable(lazy(() => import('pages/tags/Tags')));
const DetailPage = Loadable(lazy(() => import('pages/detail/Detail')));
const FeedPage = Loadable(lazy(() => import('pages/feed/Feed')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <FeedPage />
    },
    // {
    //   path: 'color',
    //   element: <Color />
    // },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'post-page',
      element: <PostPage />
    },
    {
      path: 'tags-page',
      element: <TagsPage />
    },
    {
      path: 'detail-page',
      element: <DetailPage />
    },
    {
      path: 'feed-page',
      element: <FeedPage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
