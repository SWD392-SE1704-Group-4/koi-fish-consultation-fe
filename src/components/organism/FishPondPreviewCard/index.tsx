import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import { FishPond } from 'AppModels';
import { fengShuiElementLogos } from '../../../constants/Fengshui/Logo';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

interface FishPondProps {
    fishPond: FishPond
}

const FishPondPreviewCard: React.FC<FishPondProps> = (props): JSX.Element => {
    const {
        pondName,
        pondShape,
        pondSize,
        pondDepth,
        pondMaterial,
        hasWaterfall,
        hasPlants,
        hasRocks,
        isSaltwater,
        numKoiFish,
        waterCapacity,
        pondLocation,
        pondOrientation
    } = props.fishPond;

    return (
        <React.Fragment>
            <Card variant="outlined">
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={`${cloudfrontUrl}/default-pond-image.jpg`} // Replace with a default image or pond-specific image if available
                            loading="lazy"
                            alt={pondName}
                        />
                    </AspectRatio>
                </CardOverflow>
                <CardContent>
                    <Typography level="title-md">{pondName}</Typography>
                    <Typography level="body-sm" textColor="text.secondary">
                        {pondLocation}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm">
                        <strong>Shape:</strong> {pondShape}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Size:</strong> {pondSize} m²
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Depth:</strong> {pondDepth} m
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Material:</strong> {pondMaterial}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Water Capacity:</strong> {waterCapacity} liters
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Number of Koi Fish:</strong> {numKoiFish}
                    </Typography>
                    <Typography level="body-sm">
                        <strong>Saltwater:</strong> {isSaltwater ? 'Yes' : 'No'}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography level="body-sm">
                        <strong>Features:</strong> 
                        {hasWaterfall ? ' Waterfall,' : ''} 
                        {hasPlants ? ' Plants,' : ''} 
                        {hasRocks ? ' Rocks' : ''}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                </CardContent>
            </Card>
        </React.Fragment>
    );
};

export default FishPondPreviewCard;
