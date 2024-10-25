import { Box, Modal, ModalClose, Sheet, Typography, Button, Grid, FormLabel } from "@mui/joy";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { selectFishPond, selectFishPondDetailModalOpen } from "../../../../../features/fengshui/fengshui.selectors";
import { setFishPondDetailModalOpenAction } from "../../../../../features/fengshui";

const FishPondDetailModal: React.FC<any> = (): JSX.Element => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const open = useSelector(selectFishPondDetailModalOpen);
  const fishPond = useSelector(selectFishPond);

  const handleDelete = () => {
    // const request = {
    //     pondId: fishPond?.pondId
    // };
    // dispatch(requestDeleteFishPond({ request }));
  };

  return (
    <Modal
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      open={open}
      onClose={() => dispatch(setFishPondDetailModalOpenAction(false))}
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
          Delete Fish Pond Information
        </Typography>
        <Grid container spacing={2}>
          {/* Display Fish Pond details */}
          {[
            { label: "Pond Name", value: fishPond?.pondName },
            { label: "Shape", value: fishPond?.pondShape },
            { label: "Size (m²)", value: fishPond?.pondSize },
            { label: "Depth (m)", value: fishPond?.pondDepth },
            { label: "Material", value: fishPond?.pondMaterial },
            { label: "Has Waterfall", value: fishPond?.hasWaterfall ? "Yes" : "No" },
            { label: "Has Plants", value: fishPond?.hasPlants ? "Yes" : "No" },
            { label: "Has Rocks", value: fishPond?.hasRocks ? "Yes" : "No" },
            { label: "Saltwater", value: fishPond?.isSaltwater ? "Yes" : "No" },
            { label: "Number of Koi Fish", value: fishPond?.numKoiFish },
            { label: "Water Capacity (m³)", value: fishPond?.waterCapacity },
            { label: "Element", value: fishPond?.pondElement || "N/A" },
            { label: "Location", value: fishPond?.pondLocation },
            { label: "Orientation", value: fishPond?.pondOrientation },
          ].map((fieldData, index) => (
            <Grid xs={6} key={index}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FormLabel sx={{ color: "text.secondary" }}>{fieldData.label}:</FormLabel>
                <Typography sx={{ color: "text.primary" }}>{fieldData.value || "N/A"}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'right', gap: 1, mt: 3 }}>
          <Button
            type="button"
            onClick={() => dispatch(setFishPondDetailModalOpenAction(false))}
            sx={{ backgroundColor: "#9e777c", borderRadius: 0, width: '20%' }}
          >
            Close
          </Button>
          {/* <Button
            type="button"
            onClick={handleDelete}
            sx={{ backgroundColor: "#ed2d4d", borderRadius: 0, width: '20%' }}
          >
            Delete
          </Button> */}
        </Box>
      </Sheet>
    </Modal>
  );
};

export default FishPondDetailModal;
