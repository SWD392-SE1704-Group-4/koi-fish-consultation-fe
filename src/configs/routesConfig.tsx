import { privateRoutes, publicRoutes } from "../constants/routes";
import { Route, Routes } from "react-router-dom";


const RouteComponent: React.FC<any> = (props: any): JSX.Element => {
    const { listItem } = props;
    return (
        <Routes>
            {privateRoutes.map((path: any) => {
                return (<Route path={path} />);
            })}
            {publicRoutes.map((path: string) => {
                return (<Route path={path} />);
            })}
        </Routes>
    );
}

export default RouteComponent;