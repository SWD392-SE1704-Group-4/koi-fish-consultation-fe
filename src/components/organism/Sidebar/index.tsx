import { Box, Typography, List, ListItem, ListItemButton } from '@mui/joy';
import { SxProps } from '@mui/material';
import styles from './style.module.scss';
import VerticalList from '../../molecule/VerticalList';
import Button from '@mui/joy/Button';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import BaseListItem from '../../atoms/BaseListItem';



interface SidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    listItem: any;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed, listItem }): JSX.Element => {

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

    return (
        <Box sx={{ ...sidebarStyles, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} className={styles.sidebar}>
            <Box sx={{
                padding: '0 13px',
                height: '60px',
                width: '100%',
                boxSizing: 'border-box',
                alignItems: 'center',
                display: 'inline-flex',
            }}>
                <MenuIcon color='primary' onClick={toggleCollapse} />
            </Box>

            <VerticalList listItem={listItem} collapsed={collapsed} />

            <Box sx={{
                padding: '0 13px',
                marginBottom: '20px',
            }}>
                <BaseListItem title="Back to home" icon={<HomeIcon/>} collapsed={collapsed} href='/home'/>
            </Box>
        </Box>

    );
}

export default Sidebar;
