import { List } from '@mui/joy';
import { BaseListItemProps } from 'AppModels';
import BaseListItem from '../../atoms/BaseListItem';
import styles from './style.module.scss';
import Button from '@mui/joy/Button';

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
