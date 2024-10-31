import { Box, Grid } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";
import Sidebar from "../../components/organism/Sidebar";
import Header from "../../components/organism/Header";
import React from "react";
import DashboardHeader from "../../components/organism/DashboardHeader";
import UserSettingDashboard from "./UserSetting";
import { adminDashboardSubRoutes, memberDashboardSubRoutes, staffDashboardSubRoutes } from "../../constants/routes";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthInfo, selectIsLoggedIn, selectUserInfo } from "../../features/auth/auth.selectors";
import { useNavigate } from 'react-router-dom';
import { USER_GROUP } from "../../constants/Cognito";
import { GetAccessToken } from "../../utils/tokens";
import { setCurrentDashboardTabAction } from "../../features/app";
import { selectCurrentDashboardTab } from "../../features/app/app.selectors";

const Dashboard: React.FC = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userInfo = useSelector(selectUserInfo);
    const authInfo = useSelector(selectAuthInfo);

    const currentTab = useSelector(selectCurrentDashboardTab);

    const [collapsed, setCollapsed] = React.useState(false);


    React.useEffect(() => {
        if (authInfo.isLoaded && !isLoggedIn) {
            navigate('/login');
        }
        const matchedRoute = [...staffDashboardSubRoutes, ...adminDashboardSubRoutes, ...memberDashboardSubRoutes]
            .find(route => route.href === location.pathname);
        if (matchedRoute) {
            dispatch(setCurrentDashboardTabAction(matchedRoute.title));
        }
    }, [isLoggedIn, navigate, authInfo.isLoaded, location.pathname]);

    return (
        <Grid container sx={{ flexGrow: 1, flexWrap: 'nowrap' }}>
            <Grid
                xs={collapsed ? 1 : 11}
                sx={{
                    width: collapsed ? '60px' : '240px',
                    transition: 'width 0.3s',
                }}
            >
                <Sidebar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                    listItem={
                        userInfo?.role === USER_GROUP.STAFF ? staffDashboardSubRoutes :
                            (userInfo?.role === USER_GROUP.ADMIN ? adminDashboardSubRoutes :
                                (userInfo?.role === USER_GROUP.USER ? memberDashboardSubRoutes : null))
                    }
                />
            </Grid>
            <Grid
                xs={collapsed ? 11 : 1}
                sx={{
                    flexGrow: 1,
                    transition: 'margin-left 0.3s',
                }}
            >
                <DashboardHeader title={currentTab} />
                <Box sx={{
                    height: "100vh",
                    padding: 2
                }}>
                    <Routes>
                        {userInfo?.role == USER_GROUP.STAFF &&
                            staffDashboardSubRoutes.map((r, index) => {
                                return <Route path={r.path} element={<r.container />} key={index} />
                            })
                        }
                        {userInfo?.role == USER_GROUP.ADMIN &&
                            adminDashboardSubRoutes.map((r, index) => {
                                return <Route path={r.path} element={<r.container />} key={index} />
                            })
                        }
                        {userInfo?.role == USER_GROUP.USER &&
                            memberDashboardSubRoutes.map((r, index) => {
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