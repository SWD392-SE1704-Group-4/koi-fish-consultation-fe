import React, { Suspense, useEffect, forwardRef, Ref } from "react";
import { Box, Button, Input, Typography, FormLabel, Grid } from "@mui/joy";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Text, Html } from "@react-three/drei";
import BlogCard from "../../components/blogs/BlogCard";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/organism/Header";
import { selectUserInfo } from "../../features/auth/auth.selectors";
import Footer from "../../components/organism/Footer";
import { useNavigate, Routes,Route } from "react-router-dom";
import { mainLayoutSubRoutes } from "../../constants/routes";


const MainLayout: React.FC = (): JSX.Element => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <Header />

            <Routes>
                {mainLayoutSubRoutes.map(({ path, container: Component }, index) => (
                    <Route key={index} path={path} element={<Component />} />
                ))}
            </Routes>

            <Footer />
        </React.Fragment>
    );
};

export default MainLayout;