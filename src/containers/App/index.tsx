import React from "react";
import { ThemeProvider } from "@emotion/react";
import Sidebar from "../../components/organism/Sidebar";
import Header from "../../components/organism/Header";
import MainLayout from "../../components/organism/MainLayout";
import { Grid } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";
import Dashboard from "../Dashboard";
import Home from "../Home";
import { applyTheme } from '@cloudscape-design/components/theming';
import { theme } from "../../utils/theme";
import Login from "../LoginPage";
import SignUp from "../SignUpPage";
import RouteComponent from "../../configs/routesConfig";

const { reset } = applyTheme({ theme });

const App: React.FC = (): JSX.Element => {
    return (
        <>
            <RouteComponent></RouteComponent>
        </>
    );
}

export default App;