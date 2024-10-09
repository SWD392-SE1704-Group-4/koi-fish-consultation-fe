import { Box, Grid } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";
import Sidebar from "../../components/organism/Sidebar";
import Header from "../../components/organism/Header";
import React from "react";
import DashboardHeader from "../../components/organism/DashboardHeader";
import UserSettingDashboard from "./UserSetting";
import { memberDashboardSubRoutes } from "../../constants/routes";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../features/auth/auth.selectors";
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [collapsed, setCollapsed] = React.useState(false);
    const [currentRoute, setCurrentRoute] = React.useState(memberDashboardSubRoutes[0]);

    //thêm loading vào đây để redirect khi chưa đăng nhập
    // React.useEffect(() => {
    //     if (!isLoggedIn) {
    //       navigate('/');
    //     }
    //   }, [isLoggedIn, navigate]);

    return (
        <Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
            <Grid
                xs={collapsed ? 1 : 11}
                sx={{
                    width: collapsed ? '60px' : '240px',
                    transition: 'width 0.3s',
                }}
            >
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} listItem={memberDashboardSubRoutes} />
            </Grid>
            <Grid
                xs={collapsed ? 11 : 1}
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s',
                }}
            >
                <DashboardHeader title={currentRoute?.title}/>
                <Box sx={{
                    height: "100vh",
                    padding: 2
                }}>
                    <Routes>
                        {memberDashboardSubRoutes.map(r => {
                            return <Route path={r.path} element={<r.container />} />
                        })}
                    </Routes>
                </Box>

            </Grid>
        </Grid>
    );
}

export default Dashboard;