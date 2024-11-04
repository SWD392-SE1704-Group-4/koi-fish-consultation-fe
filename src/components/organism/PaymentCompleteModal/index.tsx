import {
    Box, Modal, ModalClose, Sheet, Typography, Input, Button, Grid, FormLabel, Select, Option, ListItemDecorator
} from "@mui/joy";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Advertisement, AdvertisementPackage } from "AppModels";
import React from "react";
import { selectUserInfo } from "../../../features/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { requestCreatePayment } from "../../../features/advertisement/advertisement.actions";
import { selectPayment, selectPaymentSuccessModalOpen, selectPostingSuccessModalOpen } from "../../../features/advertisement/advertisement.selectors";


const AdvertisementPackageCard: React.FC<AdvertisementPackage> = ({
    packageName,
    description,
    price,
    durationInDays,
    maxAds,
    active,
}) => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const open  = useSelector(selectPaymentSuccessModalOpen);
    
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => {
                // navigate('/me/my-advertisement');
                // dispatch(setPostingSuccessModalOpenAction(null));
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
                    Purchase successfully, now you can post ads
                </Typography>
            </Sheet>
        </Modal>
    );
};

export default AdvertisementPackageCard;
