import {
  FaBehance,
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaSketch,
  FaFolderOpen,
  FaCalendarDays,
  FaWpforms,
} from 'react-icons/fa6';

import {
  FaHome,
  FaUserFriends,
} from 'react-icons/fa';

export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
    icon: <FaHome />,
  },
  {
    id: 2,
    url: '/team',
    text: 'team',
    icon: <FaUserFriends />,
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
    icon: <FaFolderOpen />,
  },
  {
    id: 4,
    url: '/calendar',
    text: 'calendar',
    icon: <FaCalendarDays />,
  },
  {
    id: 5,
    url: '/documents',
    text: 'documents',
    icon: <FaWpforms />,
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com',
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: 'https://www.x.com',
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    url: 'https://www.linkedin.com',
    icon: <FaLinkedinIn />,
  },
  {
    id: 4,
    url: 'https://www.behance.net',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.sketch.com',
    icon: <FaSketch />,
  },
];
