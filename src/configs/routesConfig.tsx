import { privateRoutes, publicRoutes } from "../constants/routes";
import { Route, Routes } from "react-router-dom";


const RouteComponent: React.FC<any> = (props: any): JSX.Element => {
    const { listItem } = props;
    return (
        <Routes>
            {privateRoutes.map((route: any, index) => {
                return (<Route path={route.path} element={<route.container/>} key={index} />);
            })}
            {publicRoutes.map((route: any, index) => {
                 return (<Route path={route.path} element={<route.container/>} key={index} />);
            })}
        </Routes>
    );
}

export default RouteComponent;
