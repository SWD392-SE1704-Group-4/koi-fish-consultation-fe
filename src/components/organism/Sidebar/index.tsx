import { Box, Typography, List, ListItem, ListItemButton } from '@mui/joy';
import { SxProps } from '@mui/material';
import styles from './style.module.scss';
import VerticalList from '../../molecule/VerticalList';
import Button from '@mui/joy/Button';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';



interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }): JSX.Element => {

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };
    const sidebarStyles: SxProps = {
        position: 'fixed',
        height: '100vh',
        padding: '0 5px',
        width: collapsed ? '60px' : '240px',
        backgroundColor: '#071012',
        boxSizing: 'border-box',
        transition: 'width 0.3s',
        overflow: 'hidden',
      };
    const listData = [
        {
            title: 'My dashboard',
            icon: <HomeIcon/>,
            href: '/me/home'
        },
        {
            title: 'My profile',
            icon: <HomeIcon/>,
            href: '/me/dashboard'
        },
        {
            title: 'Fengshui consultation',
            icon: <HomeIcon/>,
            href: '/me/consultation'
        },
        {
            title: 'Favourite',
            icon: <HomeIcon/>,
            href: '/me/favourite'
        },
    ];

    return (
        <Box sx={sidebarStyles} className={styles.sidebar} >
            <Box sx={{
                padding: '0 13px',
                height: '60px',
                width: '100%',
                boxSizing: 'border-box',
                alignItems: 'center',
                display: 'inline-flex',
            }}>
                <MenuIcon color= 'primary' onClick={toggleCollapse} />
            </Box>
            <VerticalList listItem={listData} collapsed={collapsed} />
        </Box>
    );
}

export default Sidebar;
