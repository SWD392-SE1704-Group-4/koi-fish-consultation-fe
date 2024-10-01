import { List } from '@mui/joy';
import BaseListItem from '../../atoms/BaseListItem';
import styles from './style.module.scss';

const VerticalList: React.FC<any> = (props: any): JSX.Element => {
    const { listItem, collapsed } = props;
    return (
        <List>
            {listItem?.map((element: any, index: number) => {
                return (
                    <BaseListItem 
                        key={index}
                        title={element.title} 
                        icon={<element.icon/>} 
                        href={element.href}
                        collapsed={collapsed}  
                    />
                );
            })}
        </List>
    );
}

export default VerticalList;

