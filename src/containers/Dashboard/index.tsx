import { Box, Grid } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";
import Sidebar from "../../components/organism/Sidebar";
import Header from "../../components/organism/Header";
import React from "react";

const Dashboard: React.FC = (): JSX.Element => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
            <Grid
                xs={collapsed ? 1 : 11}

                sx={{
                    width: collapsed ? '60px' : '240px',
                    transition: 'width 0.3s',
                }}
            >
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </Grid>
            <Grid
                xs={collapsed ? 11 : 1}
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s',
                }}
            >
                <Header />
                <Box sx={{
                    height: "100vh",
                    padding: 2
                }}>
                    <BoardLayout></BoardLayout>
                </Box>

            </Grid>
        </Grid>

    );
}

export default Dashboard;