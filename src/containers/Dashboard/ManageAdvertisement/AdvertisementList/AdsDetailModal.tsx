import { Box, Modal, ModalClose, Sheet, Typography, Button, Grid, FormLabel, Avatar } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { selectAdvertisement, selectAdvertisementDetailModalOpen } from "../../../../features/advertisement/advertisement.selectors";
import { setAdvertisementDetailModalOpenAction } from "../../../../features/advertisement";
import { requestApproveAdvertisement, requestDenyAdvertisement } from "../../../../features/advertisement/advertisement.actions";

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const AdvertisementDetailModal: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const open = useSelector(selectAdvertisementDetailModalOpen);
  const advertisement = useSelector(selectAdvertisement);

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => dispatch(setAdvertisementDetailModalOpenAction(false))}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <Sheet
        variant="outlined"
        sx={{ maxWidth: 800, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />
        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          sx={{ fontWeight: 'lg', mb: 5 }}
        >
          Advertisement Details
        </Typography>
        <Grid container spacing={2}>
          {/* Display Advertisement details */}
          {[
            { label: "Title", value: advertisement?.title },
            { label: "Description", value: advertisement?.description },
            { label: "Quantity", value: advertisement?.quantity },
            { label: "Contact Information", value: advertisement?.contactInfo },
            { label: "Location", value: advertisement?.location },
            { label: "Type", value: advertisement?.advertisementType?.typeName },
            { label: "Status", value: advertisement?.status },
            { label: "Views", value: advertisement?.viewsCount },
            { label: "Expires on", value: new Date(advertisement?.expirationDate).toLocaleDateString() },
          ].map((fieldData, index) => (
            <Grid xs={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FormLabel sx={{ color: "text.secondary" }}>{fieldData.label}:</FormLabel>
                <Typography sx={{ color: "text.primary" }}>{fieldData.value || "N/A"}</Typography>
              </Box>
            </Grid>
          ))}

          {/* Display Advertisement Pictures */}
          {advertisement?.additionalImages?.length !== 0 && (
            <Grid xs={12}>
              <FormLabel sx={{ mb: 1, color: "text.secondary" }}>Pictures:</FormLabel>
              <Box sx={{ display: 'flex', width: 1, flexWrap: 'wrap', mt: 2 }}>
                {advertisement?.additionalImages?.map((url: string, index: number) => (
                  <img
                    key={index}
                    src={`${cloudfrontUrl + url}`}
                    alt="Advertisement"
                    height={90}
                    style={{ borderRadius: "5px", margin: '2px' }}
                  />
                ))}
              </Box>
            </Grid>
          )}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Posted By</Typography>
            <Avatar
              variant="outlined"
              size="sm"
              src={cloudfrontUrl + advertisement?.userInfo?.picture}
            />
            <Typography>Name: {advertisement?.userInfo.given_name} {advertisement?.userInfo.family_name}</Typography>
            <Typography>Email: {advertisement?.userInfo.email}</Typography>
            <Typography>Phone: {advertisement?.userInfo.phone_number}</Typography>
            <Typography>Address: {advertisement?.userInfo.address}</Typography>
          </Box>
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'right', gap: 1, mt: 3 }}>
          <Button
            type="button"
            onClick={() => {
              const request = {
                advertisementId: advertisement.advertisementId
              };
              dispatch(requestDenyAdvertisement({ request }));
              dispatch(setAdvertisementDetailModalOpenAction(false));
            }}
            sx={{ backgroundColor: "#ed2d4d", borderRadius: 0, width: '20%' }}
          >
            Deny
          </Button>
          <Button
            type="button"
            onClick={() => {
              const request = {
                advertisementId: advertisement.advertisementId
              };
              dispatch(requestApproveAdvertisement({ request }));
              dispatch(setAdvertisementDetailModalOpenAction(false));
            }}
            sx={{ backgroundColor: "#1e7819", borderRadius: 0, width: '20%' }}
          >
            Approve
          </Button>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default AdvertisementDetailModal;