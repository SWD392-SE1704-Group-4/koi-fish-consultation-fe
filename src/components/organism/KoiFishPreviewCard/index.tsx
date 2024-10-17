import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { KoiFish } from 'AppModels';
import { fengShuiElementLogos } from '../../../constants/Fengshui/Logo';

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
                    <Typography level="body-sm" mt={1}>
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
