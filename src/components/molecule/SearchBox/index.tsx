import { Box, Typography, List, ListItem, ListItemButton, Input, Button } from '@mui/joy';
import { SxProps } from '@mui/material';
// import styles from './style.module.scss';

const SearchBox: React.FC<SxProps> = (props): JSX.Element =>{

    return (
        <Box
            sx={{
                width: '280px',
                display: 'flex',
                gap: 1,
                margin: '5px 0',
                ...props
            }}
        >
            <Input placeholder="Typing here..."></Input>
            <Button>Search</Button>
        </Box>
    );
}

export default SearchBox;
