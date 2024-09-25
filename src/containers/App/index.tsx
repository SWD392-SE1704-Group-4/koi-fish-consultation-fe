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
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <>
        <RouteComponent></RouteComponent>
            {/* <Header />
            <Home /> */}
            {/* <SignUp></SignUp> */}
            {/* <Login></Login> */}
        </>
        // <Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
        //     <Grid
        //         xs={collapsed ? 1 : 11} 

        //         sx={{
        //             width: collapsed ? '60px' : '240px', 
        //             transition: 'width 0.3s', 
        //         }}
        //     >
        //         <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        //     </Grid>
        //     <Grid
        //         xs={collapsed ? 11 : 1}
        //         sx={{
        //             flexGrow: 1,
        //             transition: 'margin-left 0.3s',
        //         }}
        //     >
        //         <Header /> 
        //        <Dashboard></Dashboard>

        //     </Grid>
        // </Grid>

    );
}

export default App;