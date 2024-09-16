import { privateRoutes, publicRoutes } from "../constants/routes";
import { Route, Routes } from "react-router-dom";


const RoutesConfig: React.FC<any> = (props: any): JSX.Element => {
    const { listItem } = props;
    return (
        <Routes>
            {privateRoutes.map((path: string) => {
                return (<Route path={path} />);
            })}
            {publicRoutes.map((path: string) => {
                return (<Route path={path} />);
            })}
        </Routes>
    );
}

export function routesConfig(): any {


}