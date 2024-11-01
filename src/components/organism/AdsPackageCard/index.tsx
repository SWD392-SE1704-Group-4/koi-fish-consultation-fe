import { Button, Card, CardContent, Typography } from "@mui/joy";
import { Advertisement, AdvertisementPackage } from "AppModels";
import React from "react";


const AdvertisementPackageCard: React.FC<AdvertisementPackage> = ({
    packageName,
    description,
    price,
    durationInDays,
    maxAds,
    active,
}) => {
    return (
        <Card variant="outlined" sx={{ minHeight: '250px', textAlign: 'center', boxShadow: 1, p: 3 }}>
            <CardContent>
                <Typography fontWeight="bold" sx={{ mb: 1 }}>
                    {packageName}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    Duration: {durationInDays} days
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    Max Ads: {maxAds === 999 ? 'Unlimited' : maxAds}
                </Typography>
                <Typography color="primary" sx={{ mt: 1, mb: 2 }}>
                    ${price.toFixed(2)}
                </Typography>
                <Button
                    variant="solid"
                    color={active ? 'primary' : 'neutral'}
                    disabled={!active}
                    sx={{
                        cursor: active ? 'pointer' : 'not-allowed',
                    }}
                >
                    {active ? 'Purchase' : 'Inactive'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default AdvertisementPackageCard;
