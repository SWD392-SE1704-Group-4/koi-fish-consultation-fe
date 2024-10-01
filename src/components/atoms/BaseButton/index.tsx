import { List } from '@mui/joy';
import BaseListItem from '../../atoms/BaseListItem';

const BaseButton: React.FC<any> = (props: any): JSX.Element => {
    const { listItem } = props;
    return (
        <List>
            {listItem?.map((element: any) => {
                return (<BaseListItem title={element.title} icon={element.icon} href={element.href} collapsed={element.collapsed}></BaseListItem>);
            })}
        </List>
    );
}

export default BaseButton;
