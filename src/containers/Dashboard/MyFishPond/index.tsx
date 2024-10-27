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
import CreateKoiPondModal from "./CreateKoiPondModal";
import { setCreateKoiFishModalOpenAction, setCreateKoiPondModalOpenAction } from "../../../features/fengshui";
import { selectUserInfo } from "../../../features/auth/auth.selectors";
import { requestGetMyFishPond } from "../../../features/fengshui/fengshui.actions";

const MyFishPond: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const userInfo = useSelector(selectUserInfo);
    const myFishPondList = useSelector(selectFishPondList);
    
    React.useEffect(() => {
        const request = {
            appUserId: userInfo.sub
        };
        dispatch(requestGetMyFishPond({request}));
    },[])

    return (
        <React.Fragment>
            <Button sx={{
                mt: 2,
                mb: 2,
                borderRadius: 0,
                backgroundColor: "#ed2d4d"
            }}
            onClick={() => { dispatch(setCreateKoiPondModalOpenAction(true))}}
            >
                Create
            </Button>
            <CreateKoiPondModal />
            <FishPondList fishPondData={myFishPondList} />
        </React.Fragment>
    );
}

export default MyFishPond;

