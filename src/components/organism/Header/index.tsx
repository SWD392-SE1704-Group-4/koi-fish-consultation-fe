import { Stack, Typography, List, ListItem, ListItemButton, Grid, Button, Box } from '@mui/joy';
import styles from './style.module.scss';

const Header: React.FC = (): JSX.Element => {
    return (
        <Stack
            direction="row"
            sx={{
                width: '100%',
                height: '50px',
                padding: '0 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                boxSizing: 'border-box',
                borderBottom: '1px solid'
            }}
            className={styles.header}
        >
            <Typography
                sx={{ color: 'black' }}
            >
                Home page
            </Typography>
            {/* <List sx={{ display: 'flex', padding: 0 }}>
                <ListItem sx={{ padding: 0 }}>
                    <ListItemButton sx={{ color: '#fff', justifyContent: 'center' }}>
                        Home
                    </ListItemButton>
                </ListItem>
                <ListItem sx={{ padding: 0 }}>
                    <ListItemButton sx={{ color: '#fff', justifyContent: 'center' }}>
                        About
                    </ListItemButton>
                </ListItem>
            </List> */}
            <Stack
                direction="row"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                }}
            >
                <Typography
                    sx={{ color: 'black' }}
                >
                    Koi fish
                </Typography>
                <Typography
                    sx={{ color: 'black' }}
                >
                    Fengshui bond
                </Typography>
                <Button sx={{backgroundColor: '#e6eced', color: 'black'}}>Login</Button>
                <Button sx={{backgroundColor: '#e6eced', color: 'black'}}>Register</Button>
            </Stack>


        </Stack>
    );
}

export default Header;
