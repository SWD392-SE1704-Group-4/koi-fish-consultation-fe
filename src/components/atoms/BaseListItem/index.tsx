import { ListItem, ListItemButton, ListItemContent } from '@mui/joy';
import { useNavigate } from "react-router-dom";
import { BaseListItemProps } from 'AppModels';
import styles from './style.module.scss';

const BaseListItem: React.FC<BaseListItemProps> = (props: BaseListItemProps): JSX.Element => {
    const { title, icon, href, collapsed } = props;
    const navigate = useNavigate();

    return (

            <ListItemButton sx={{ color: 'white' }} onClick={() => navigate(href)}>
                <ListItemButton sx={{ padding: 0}}>
                    {icon}
                </ListItemButton>
                {!collapsed && <ListItemContent sx={{textAlign: 'left', whiteSpace: 'noWrap'}}>{title}</ListItemContent>} {/* Conditionally render the title */}
            </ListItemButton>

    );
}

export default BaseListItem;
