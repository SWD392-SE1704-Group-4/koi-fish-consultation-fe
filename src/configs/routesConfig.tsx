import { privateRoutes, publicRoutes } from "../constants/routes";
import { Route, Routes } from "react-router-dom";


const RouteComponent: React.FC<any> = (props: any): JSX.Element => {
    const { listItem } = props;
    return (
        <Routes>
            {privateRoutes.map((route: any) => {
                return (<Route path={route.path} element={<route.container/>} />);
            })}
            {publicRoutes.map((route: any) => {
                 return (<Route path={route.path} element={<route.container/>} />);
            })}
        </Routes>
    );
}

export default RouteComponent;
