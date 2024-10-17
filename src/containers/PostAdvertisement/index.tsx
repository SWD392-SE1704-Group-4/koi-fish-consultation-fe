import React from "react";
import "./Advertisement.css";
import Header from "../../components/organism/Header";
import { Box, Grid } from "@mui/joy";
import PostAdvertisementForm from "./PostAdvertisementForm";
import KoiFishPreviewCard from "../../components/organism/KoiFishPreviewCard";
import { useDispatch, useSelector } from "react-redux";
import { selectKoiFish } from "../../features/fengshui/fengshui.selectors";
import Footer from "../../components/organism/Footer";
import { selectAuthInfo, selectIsLoggedIn } from "../../features/auth/auth.selectors";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";
import { setAdvertisementErrorAction, setAdvertisementStatusAction } from "../../features/advertisement";
import { selectAdvertisementInfo } from "../../features/advertisement/advertisement.selectors";

const PostAdvertisement: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const currentKoiFish = useSelector(selectKoiFish)
    const advertisementInfo = useSelector(selectAdvertisementInfo);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const authInfo = useSelector(selectAuthInfo);
    const navigate = useNavigate();
    
    React.useEffect(() => {
        if (advertisementInfo.error) {
            enqueueSnackbar({ message: advertisementInfo.error, variant: "error", autoHideDuration: 2000 })
        }
        dispatch(setAdvertisementErrorAction(null))
    }, [advertisementInfo.error]);

    React.useEffect(() => {
        if (advertisementInfo.status) {
            enqueueSnackbar({ message: advertisementInfo.status, variant: "success", autoHideDuration: 2000 })
        }
        dispatch(setAdvertisementStatusAction(null))
    }, [advertisementInfo.status]);

    React.useEffect(() => {
        if (authInfo.isLoaded && !isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate, authInfo.isLoaded]);

    return (
        <React.Fragment>
            <Header></Header>
            <div className="about-us-container">
                <div className="about-us-image">
                    <img
                        src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
                        alt="About Us"
                        className="about-us-img"
                    />
                </div>
                <div className="about-us-text">
                    <h1>Advertisement</h1>
                </div>
                <div className="additional-content"></div>
            </div>
            <Grid
                container
                spacing={2}
                sx={{
                    padding: {
                        xs: "10px",
                        md: "5px 80px",
                    },
                    margin: 1,
                }}
            >
                <Grid xs={12} md={currentKoiFish ? 8 : 12}>
                    <PostAdvertisementForm />
                </Grid>
                {currentKoiFish && (
                    <Grid xs={12} md={4}>
                        <KoiFishPreviewCard koiFish={currentKoiFish} />
                    </Grid>
                )}
            </Grid>
            <Footer />
        </React.Fragment>
    );
}

export default PostAdvertisement;
