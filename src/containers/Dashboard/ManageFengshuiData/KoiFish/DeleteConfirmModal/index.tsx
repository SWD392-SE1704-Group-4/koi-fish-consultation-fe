import { Box, Modal, ModalClose, Sheet, Typography, Button, Grid, FormLabel } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectKoiFish, selectDeleteKoiFishModalOpen } from "../../../../../features/fengshui/fengshui.selectors";
import { setDeleteKoiFishModalOpenAction } from "../../../../../features/fengshui";
import { useSnackbar } from "notistack";
import { requestDeleteKoiFish } from "../../../../../features/fengshui/fengshui.actions";

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const DeleteKoiFishModal: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const open = useSelector(selectDeleteKoiFishModalOpen);
  const koiFish = useSelector(selectKoiFish);

  const handleDelete = () => {
    const request = {
        koiFishId: koiFish?.id
    }
    dispatch(requestDeleteKoiFish({ request }))
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => dispatch(setDeleteKoiFishModalOpenAction(false))}
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
          Delete Koi Fish Information
        </Typography>
        <Grid container spacing={2}>
          {/* Display Koi Fish details */}
          {[
            { label: "Koi Fish Name", value: koiFish?.koiFishName },
            { label: "Color", value: koiFish?.koiFishColor },
            { label: "Size (cm)", value: koiFish?.koiFishSize },
            { label: "Age (years)", value: koiFish?.koiFishAge },
            { label: "Price", value: koiFish?.koiFishPrice },
            { label: "Energy Type", value: koiFish?.energyType },
            { label: "Symbolic Meaning", value: koiFish?.symbolicMeaning },
            { label: "Favorable Number", value: koiFish?.favorableNumber },
            { label: "Favorable Color", value: koiFish?.favorableColor },
            { label: "Origin", value: koiFish?.koiFishOrigin },
            { label: "Feng Shui Element", value: koiFish?.fengshuiElement?.elementName },
            { label: "Description", value: koiFish?.koiFishDescription },
          ].map((fieldData, index) => (
            <Grid xs={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FormLabel sx={{ color: "text.secondary" }}>{fieldData.label}:</FormLabel>
                <Typography sx={{ color: "text.primary" }}>{fieldData.value || "N/A"}</Typography>
              </Box>
            </Grid>
          ))}

          {/* Display Koi Fish Pictures */}
          {/* {koiFish?.koiFishPictures?.length !== 0 && (
            <Grid xs={12}>
              <FormLabel sx={{ mb: 1, color: "text.secondary" }}>Pictures:</FormLabel>
              <Box sx={{ display: 'flex', width: 1, flexWrap: 'wrap', mt: 2 }}>
                {koiFish.koiFishPictures.map((url: string, index: number) => (
                  <img
                    key={index}
                    src={`${cloudfrontUrl + url}`}
                    alt="Koi Fish"
                    height={90}
                    style={{ borderRadius: "5px", margin: '2px' }}
                  />
                ))}
              </Box>
            </Grid>
          )} */}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'right', gap: 1, mt: 3 }}>
          <Button
            type="button"
            onClick={() => dispatch(setDeleteKoiFishModalOpenAction(false))}
            sx={{ backgroundColor: "#9e777c", borderRadius: 0, width: '20%' }}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleDelete}
            sx={{ backgroundColor: "#ed2d4d", borderRadius: 0, width: '20%' }}
          >
            Delete
          </Button>
        </Box>
      </Sheet>
    </Modal>
  );
};

export default DeleteKoiFishModal;
