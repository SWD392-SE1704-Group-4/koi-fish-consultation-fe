import { AspectRatio, Box, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Grid, IconButton, Input, Stack, styled, Typography } from "@mui/joy";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationError } from "yup";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FishPondList from "../../../components/organism/FishPondList";
import { selectFishPond, selectFishPondList } from "../../../features/fengshui/fengshui.selectors";
import { setCreateKoiFishModalOpenAction, setCreateKoiPondModalOpenAction } from "../../../features/fengshui";
import { selectUserInfo } from "../../../features/auth/auth.selectors";
import { requestGetMyFishPond } from "../../../features/fengshui/fengshui.actions";
import AdvertisementList from "../ManageAdvertisement/AdvertisementList";
import { selectAdvertisementList } from "../../../features/advertisement/advertisement.selectors";
import { requestGetMyAdvertisement } from "../../../features/advertisement/advertisement.actions";
import AdvertisementCard from "../../../components/organism/AdvertisementCard";
import MyAdvertisementCard from "../../../components/organism/MyAdvertisementCard";

const MyAdvertisement: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const myAdsList = useSelector(selectAdvertisementList);

    React.useEffect(() => {
        const request = {
            appUserId: userInfo.sub
        };
        dispatch(requestGetMyAdvertisement({ request }));
    }, [])

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                {myAdsList && myAdsList.length > 0 ? (
                    myAdsList.map(ad => (
                        <Grid xs={12} sm={6} md={4} lg={3} key={ad.advertisementId}>
                            <MyAdvertisementCard key={ad.advertisementId} advertisement={ad} />
                        </Grid>
                    ))
                ) : (
                    <Typography>No advertisements available.</Typography>
                )}
            </Grid>
        </React.Fragment>
    );
}

export default MyAdvertisement;

