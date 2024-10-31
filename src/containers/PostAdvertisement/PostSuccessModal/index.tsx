import React from "react";
import {
    Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option, ListItemDecorator
} from "@mui/joy";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { selectPostingSuccessModalOpen } from "../../../features/advertisement/advertisement.selectors";
import { setPostingSuccessModalOpenAction } from "../../../features/advertisement";

const inputStyles = {
    borderRadius: 0,
};

const labelStyles = {
    flexShrink: 0,
    width: 120,
};

const buttonStyles = {
    mt: 2,
    width: '20%',
    borderRadius: 0,
};
const PostSuccessModal: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const open  = useSelector(selectPostingSuccessModalOpen);
    
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => {
                navigate('/me/my-advertisement');
                dispatch(setPostingSuccessModalOpenAction(null));
            }}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: 800, borderRadius: 'md', p: 2, textAlign: 'center' }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <CheckCircleIcon sx={{color: 'green', width: '50px', height: '50px', mt:2}}/>
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: 'lg', mb: 5 }}
                >
                    Post advertisement successfully, waiting for approval
                </Typography>
            </Sheet>
        </Modal>
    );
};

export default PostSuccessModal;
