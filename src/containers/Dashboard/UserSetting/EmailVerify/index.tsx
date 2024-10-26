import { AspectRatio, Box, Button, Card, CardActions, CardOverflow, Divider, FormControl, FormLabel, Grid, IconButton, Input, Stack, styled, Typography } from "@mui/joy";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationError } from "yup";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { selectAuthInfo, selectIsLoggedIn, selectUserInfo } from "../../../../features/auth/auth.selectors";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import convertFileToBase64 from "../../../../utils/convertFileToBase64";
import { useSnackbar } from "notistack";
import { requestUpdateUser, requestUserInfo } from "../../../../features/auth/auth.actions";
import { setAuthErrorAction, setUpdateUserStatusAction } from "../../../../features/auth";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const inputStyles = {
    borderRadius: 0,
};

const labelStyles = {
    flexShrink: 0,
    width: 120,
};

const buttonStyles = {
    mt: 2,
    color: 'white',
    borderRadius: 0,
};

const EmailVerify: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(requestUserInfo());
    }, [])



    return (
        <React.Fragment>
            Verify email
        </React.Fragment>
    );
}

export default EmailVerify;

