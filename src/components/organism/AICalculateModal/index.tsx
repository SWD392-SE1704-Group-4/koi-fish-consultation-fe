import {
    Box, Modal, ModalClose, Sheet, Typography, Stack,
    CircularProgress
} from "@mui/joy";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { AdvertisementPackage } from "AppModels";
import React from "react";
import { selectPersonalFengshui } from "../../../features/auth/auth.selectors";
import { useDispatch, useSelector } from "react-redux";
import { selectAICalculationModalOpen, selectAIconsultation, selectIsFetching, selectTargetCompareData } from "../../../features/fengshui/fengshui.selectors";
import { setAICalculationModalOpenAction, setAIconsultationAction } from "../../../features/fengshui";
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { GetCalcutationFromAI } from "../../../services/calculation";
import { setAIconsultation } from "../../../features/fengshui/fengshui.reducers";

const AICalculationModal: React.FC = () => {
    const dispatch = useDispatch();
    const open = useSelector(selectAICalculationModalOpen);

    const targetCompareData = useSelector(selectTargetCompareData);
    const isFetching = useSelector(selectIsFetching);

    const personalFengshui = useSelector(selectPersonalFengshui);
    const chatGPTResponse = useSelector(selectAIconsultation);

    // React.useEffect(()=>{
    //     const load = async () =>{
    //         await calculate();
    //     }
    //     load()
    // }, [targetCompareData, open])

    // const calculate = async () => {
    //     try{
    //         const request = {
    //             personalFengshuiData: personalFengshui,
    //             targetCompareData: targetCompareData
    //         }
    //         console.log(request)
    //         const response = await GetCalcutationFromAI(request);
    //         if(response.data.payload){
    //             setChatGPTResponse(response.data.payload);
    //         }
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={open}
            onClose={() => {
                dispatch(setAIconsultationAction(null));
                dispatch(setAICalculationModalOpenAction(false));
            }}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <Sheet
                variant="outlined"
                sx={{ maxWidth: 800, borderRadius: 'md', p: 2, textAlign: 'center' }}
            >
                <ModalClose variant="plain" sx={{ m: 1 }} />
                <Typography
                    component="h2"
                    id="modal-title"
                    level="h4"
                    textColor="inherit"
                    sx={{ fontWeight: 'lg', mb: 5 }}
                >
                    Calculate by ChatGPT
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Stack sx={{ textAlign: 'left', gap: 1, width: "50%" }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Your Feng Shui Information:</Typography>
                        <Typography><b>Earthly Branch:</b> {personalFengshui?.earthlyBranch}</Typography>
                        <Typography><b>Heavenly Stem:</b> {personalFengshui?.heavenlyStem}</Typography>
                        <Typography><b>Tank Direction:</b> {personalFengshui?.tankDirection}</Typography>
                        <Typography><b>Fish Recommendation:</b> {personalFengshui?.fishRecommendation}</Typography>
                        <Typography><b>Element:</b> {personalFengshui?.element}</Typography>
                    </Stack>

                    <Stack sx={{ textAlign: 'left', gap: 1, width: "50%" }}>
                        <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>Appropriate Level:</Typography>
                        <Typography><b>Explain:</b> {chatGPTResponse?.description}</Typography>
                        <Typography><b>Element:</b> {chatGPTResponse?.element}</Typography>
                        {/* Add a Gauge component here if needed */}
                        {/* Example Gauge Component */}
                        {/* <Typography><b>Score:</b></Typography> */}
                        {isFetching ? <CircularProgress /> :
                            <Gauge
                                value={chatGPTResponse?.score}
                                startAngle={0}
                                endAngle={360}
                                innerRadius="80%"
                                outerRadius="100%"
                                cornerRadius="50%"
                                sx={(theme) => ({
                                    [`& .${gaugeClasses.valueText}`]: {
                                        fontSize: 24,
                                    },
                                    [`& .${gaugeClasses.valueArc}`]: {
                                        fill: '#ed2d4d',
                                    },
                                    [`& .${gaugeClasses.referenceArc}`]: {
                                        fill: theme.palette.text.disabled,
                                    },
                                })}
                            // ...
                            />
                        }

                    </Stack>
                </Box>

            </Sheet>
        </Modal>
    );
};

export default AICalculationModal;
