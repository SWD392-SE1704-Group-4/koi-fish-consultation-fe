import { useMediaQuery } from '@mui/material';
import {
    Stack, Typography, Button, Avatar, IconButton, Menu, MenuItem, ListItemDecorator,
    Drawer, Box, MenuButton, Dropdown, Link
} from '@mui/joy';
import {
    Person as PersonIcon, Dashboard as DashboardIcon, Deck as DeckIcon,
    ConfirmationNumber as ConfirmationNumberIcon, Logout as LogoutIcon, Menu as MenuIcon, ArrowDropDown
} from '@mui/icons-material';
import { RemoveAccessToken } from '../../../utils/tokens';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { requestUserInfo } from '../../../features/auth/auth.actions';
import { selectUserInfo, selectIsLoggedIn } from '../../../features/auth/auth.selectors';
import { setIsLoggedInAction } from '../../../features/auth';

const DashboardHeader: React.FC<any> = (props): JSX.Element => {
    const title = props.title;
    const userInfo = useSelector(selectUserInfo);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Detect screen width less than 768px
    const isMobile = useMediaQuery('(max-width:768px)');

    useEffect(() => {
        dispatch(requestUserInfo());
    }, []);

    function logout() {
        RemoveAccessToken();
        dispatch(setIsLoggedInAction(false));
        window.location.reload();
    }

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Stack
            direction="row"
            sx={{
                width: '100%',
                height: '60px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                borderBottom: '1px solid',
            }}
            className={styles.header}
        >
            <Typography
                sx={{ color: 'black' }}
            >
                {title}
            </Typography>

            {isMobile ? (
                // Mobile view: Show menu button
                <IconButton onClick={toggleDrawer}>
                    <MenuIcon />
                </IconButton>
            ) : (
                // Desktop view: Show links and user info
                <Stack
                    direction="row"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4
                    }}
                >            
                    {userInfo && isLoggedIn ? (
                        <>
                            <Dropdown>
                                <MenuButton
                                    slots={{ root: IconButton }}
                                    slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
                                    sx={{ gap: 2 }}
                                >
                                    <Typography>{userInfo?.email}</Typography>
                                    <Avatar
                                        variant="outlined"
                                        size="sm"
                                        src={userInfo?.picture}
                                    />
                                </MenuButton>
                                <Menu sx={{}}>
                                    <MenuItem onClick={() => navigate('/me')}>
                                        <ListItemDecorator><PersonIcon /></ListItemDecorator>
                                        Dashboard
                                    </MenuItem>
                                    {userInfo?.role === 'admin' ? (
                                        <MenuItem onClick={() => navigate('/me/dashboard')}>
                                            <ListItemDecorator><DashboardIcon /></ListItemDecorator>
                                            Dashboard
                                        </MenuItem>
                                    ) : (
                                        <>
                                            <MenuItem onClick={() => navigate('/me/dashboard')}>
                                                <ListItemDecorator><DeckIcon /></ListItemDecorator>
                                                My profile
                                            </MenuItem>
                                            <MenuItem onClick={() => navigate('/me/dashboard')}>
                                                <ListItemDecorator><ConfirmationNumberIcon /></ListItemDecorator>
                                                My consultation
                                            </MenuItem>
                                        </>
                                    )}
                                    <MenuItem onClick={logout}>
                                        <ListItemDecorator><LogoutIcon /></ListItemDecorator>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Dropdown>
                        </>
                    ) : (
                        <>
                            <Button sx={{ backgroundColor: '#e6eced' }} onClick={() => navigate('/login')}>
                                <Typography>Login</Typography>
                            </Button>
                            <Button sx={{ backgroundColor: '#e6eced' }} onClick={() => navigate('/register')}>
                                <Typography>Register</Typography>
                            </Button>
                        </>
                    )}
                </Stack>
            )}

            {/* Drawer for mobile menu */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
            >
                <Box sx={{ width: 250 }}>
                    <Stack direction="column" spacing={2} sx={{ padding: 2 }}>
                        <Typography sx={{ color: 'black' }}>Koi fish</Typography>
                        <Typography sx={{ color: 'black' }}>Fengshui bond</Typography>
                        {userInfo ? (
                            <>
                                <Typography>{userInfo?.email}</Typography>
                                <Button onClick={() => navigate('/me')}>
                                    Dashboard
                                </Button>
                                {userInfo?.role === 'admin' ? (
                                    <Button onClick={() => navigate('/me/dashboard')}>
                                        Admin Dashboard
                                    </Button>
                                ) : (
                                    <>
                                        <Button onClick={() => navigate('/me/dashboard')}>
                                            My timeshare
                                        </Button>
                                        <Button onClick={() => navigate('/me/dashboard')}>
                                            My trips
                                        </Button>
                                    </>
                                )}
                                <Button onClick={logout}>
                                    Logout
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button sx={{ backgroundColor: '#e6eced', color: 'black' }}>
                                    <Link href="/login" disabled variant="plain">
                                        Login
                                    </Link>
                                </Button>
                                <Button sx={{ backgroundColor: '#e6eced', color: 'black' }}>
                                    <Link href="/register" disabled variant="plain">
                                        Register
                                    </Link>
                                </Button>
                            </>
                        )}
                    </Stack>
                </Box>
            </Drawer>
        </Stack>
    );
};

export default DashboardHeader;