import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IconName from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/pet-boarding',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Add New Boarding',
    path: '/pet-boarding-add',
    icon: <IconName.IoMdAddCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Download PDF',
    path: '/pet-boarding-report',
    icon: <FaIcons.FaDownload />,
    cName: 'nav-text'
  }
];