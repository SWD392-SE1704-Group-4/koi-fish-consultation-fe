import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { KoiFish } from 'AppModels';
import { fengShuiElementLogos } from '../../../constants/Fengshui/Logo';
import AICalculationModal from '../AICalculateModal';
import { selectPersonalFengshui, selectUserInfo, selectUserPackageInfo } from '../../../features/auth/auth.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertisementPackageList } from '../../../features/advertisement/advertisement.selectors';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Button } from '@mui/joy';
import { setAICalculationModalOpenAction, setTargetCompareDataAction } from '../../../features/fengshui';
import { requestGetAIConsultation } from '../../../features/fengshui/fengshui.actions';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

interface KoiFishProps {
    koiFish: KoiFish
}

const KoiFishPreviewCard: React.FC<KoiFishProps> = (props): JSX.Element => {
    const {
        koiFishName,
        koiFishAge,
        koiFishColor,
        koiFishDescription,
        koiFishOrigin,
        koiFishPictures,
        koiFishPrice,
        koiFishSize,
        energyType,
        favorableColor,
        favorableNumber,
        symbolicMeaning,
        fengshuiElement
    } = props.koiFish;

    const dispatch = useDispatch();
    const userPackage = useSelector(selectUserPackageInfo);
    const pFengshui = useSelector(selectPersonalFengshui);

    const handleCalculate = (data: any) => {
        const request = {
            personalFengshuiData: {
                elementName: pFengshui.element,
                // branch: pFengshui.earthlyBranch
            },
            targetCompareData: { fengshuiElement: {elementName: data?.fengshuiElement?.elementName} }
        };
        dispatch(requestGetAIConsultation({request}))

        dispatch(setAICalculationModalOpenAction(true));
    }

    const isPackageValid = userPackage.currentPackage && new Date(userPackage.packageExpiryDate) > new Date();
    return (
        <React.Fragment>

            <Card variant="outlined">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={cloudfrontUrl + koiFishPictures[0]}
                            loading="lazy"
                            alt={koiFishName}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    {(isPackageValid && pFengshui) &&
                        <Button
                            sx={{ position: 'absolute', right: 10, backgroundColor: "#ed2d4d" }}
                            onClick={() =>
                                handleCalculate({ fengshuiElement })
                            }
                        >
                            <CalculateIcon />
                        </Button>}

                    <Typography level="title-md">{koiFishName}</Typography>
                    <Typography level="body-sm" textColor="text.secondary">
                        {koiFishOrigin}
                    </Typography>
                    <Typography level="body-sm" mt={1}>
                        {koiFishDescription}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm">
                        <strong>Color:</strong> {koiFishColor}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Age:</strong> {koiFishAge} years
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Size:</strong> {koiFishSize} cm
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Price:</strong> ${koiFishPrice}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm">
                        <strong>Energy Type:</strong> {energyType}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Favorable Color:</strong> {favorableColor}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Favorable Number:</strong> {favorableNumber}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm">
                        <strong>Symbolic Meaning:</strong> {symbolicMeaning}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm" mt={1} sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                        <strong>Feng Shui Element:</strong> {fengshuiElement.elementName} {fengShuiElementLogos[fengshuiElement.elementName]}
                    </Typography>
                    <Typography level="body-xs" textColor="text.secondary">
                        <strong>Direction:</strong> {fengshuiElement.elementDirection}
                    </Typography>
                    <Typography level="body-xs" textColor="text.secondary">
                        <strong>Color:</strong> {fengshuiElement.elementColor}
                    </Typography>
                    <Typography level="body-xs" textColor="text.secondary">
                        <strong>Season:</strong> {fengshuiElement.elementSeason}
                    </Typography>
                    <Typography level="body-xs" textColor="text.secondary">
                        <strong>Yin/Yang:</strong> {fengshuiElement.elementYinYang}
                    </Typography>
                    <Typography level="body-xs" textColor="text.secondary">
                        <strong>Strength:</strong> {fengshuiElement.elementStrength}%
                    </Typography>
                </CardContent>
            </Card>
        </React.Fragment>
    );
};



export default KoiFishPreviewCard;
