import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri'; 
import * as IoIcons from 'react-icons/io';

export const sidebarData=[
    {
        title:'Home',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        className:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaIcons.FaProductHunt />,
        className:'nav-text'
    },
    {
        title:'Menucard',
        path:'/Menucard',
        icon:<RiIcons.RiServiceLine />,
        className:'nav-text'
    },
    {
        title:'Reports',
        path:'/Reports',
        icon:<IoIcons.IoIosPaper />,
        className:'nav-text'
    },
    {
        title:'Message',
        path:'/Message',
        icon:<FaIcons.FaEnvelopeOpenText />,
        className:'nav-text'
    },
    {
        title:'Support',
        path:'/Support',
        icon:<IoIcons.IoMdHelpCircle />,
        className:'nav-text'
    },
]
