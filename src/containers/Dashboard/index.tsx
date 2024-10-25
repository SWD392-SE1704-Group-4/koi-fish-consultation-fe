import { Box, Grid } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";
import Sidebar from "../../components/organism/Sidebar";
import Header from "../../components/organism/Header";
import React from "react";
import DashboardHeader from "../../components/organism/DashboardHeader";
import UserSettingDashboard from "./UserSetting";
import { memberDashboardSubRoutes, staffDashboardSubRoutes } from "../../constants/routes";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthInfo, selectIsLoggedIn, selectUserInfo } from "../../features/auth/auth.selectors";
import { useNavigate } from 'react-router-dom';
import { USER_GROUP } from "../../constants/Cognito";

const Dashboard: React.FC = (): JSX.Element => {
    const navigate = useNavigate();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userInfo = useSelector(selectUserInfo);
    const authInfo = useSelector(selectAuthInfo);
    
    const [collapsed, setCollapsed] = React.useState(false);
    const [currentRoute, setCurrentRoute] = React.useState(memberDashboardSubRoutes[0]);

    React.useEffect(() => {
        if (authInfo.isLoaded && !isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate, authInfo.isLoaded]);

    return (
        <Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
            <Grid
                xs={collapsed ? 1 : 11}
                sx={{
                    width: collapsed ? '60px' : '240px',
                    transition: 'width 0.3s',
                }}
            >
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} listItem={staffDashboardSubRoutes} />
            </Grid>
            <Grid
                xs={collapsed ? 11 : 1}
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s',
                }}
            >
                <DashboardHeader title={currentRoute?.title} />
                <Box sx={{
                    height: "100vh",
                    padding: 2
                }}>
                    <Routes>
                        {userInfo?.groups?.includes(USER_GROUP.STAFF) &&
                            staffDashboardSubRoutes.map((r, index) => {
                                return <Route path={r.path} element={<r.container />} key={index} />
                            })
                        }
                        {userInfo?.groups?.includes(USER_GROUP.ADMIN) &&
                            staffDashboardSubRoutes.map((r, index) => {
                                return <Route path={r.path} element={<r.container />} key={index} />
                            })
                        }
                        {userInfo?.groups?.includes(USER_GROUP.MEMBER) &&
                            staffDashboardSubRoutes.map((r, index) => {
                                return <Route path={r.path} element={<r.container />} key={index} />
                            })
                        }
                    </Routes>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Dashboard;