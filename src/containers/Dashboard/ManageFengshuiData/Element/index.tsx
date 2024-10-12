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
import FengshuiElementList from "./FengshuiElementList";

const Element: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                display: 'flex',
                overflow: 'hidden',
            }}
        >
          <FengshuiElementList />
        </Box>
    );
}

export default Element;

