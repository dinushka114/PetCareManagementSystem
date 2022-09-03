import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
  {
    title: 'Pet Details',
    path: '/details',
    icon: <FaIcons.FaDog />,
    cName: 'nav-text'
  },
  {
    title: 'Pet Services',
    path: '/services',
    icon: <FaIcons.FaHandshake />,
    cName: 'nav-text'
  },
  {
    title: 'Pet Accessories',
    path: '/accessories',
    icon: <FaIcons.FaFish />,
    cName: 'nav-text'
  },
  {
    title: 'Pet Boardings',
    path: '/boarding',
    icon: <FaIcons.FaWarehouse />,
    cName: 'nav-text'
  }
];