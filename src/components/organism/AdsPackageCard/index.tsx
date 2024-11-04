import { Button, Card, CardContent, Typography, Chip } from "@mui/joy";
import { AdvertisementPackage } from "AppModels";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, selectUserPackageInfo } from "../../../features/auth/auth.selectors";
import { requestCreatePayment } from "../../../features/advertisement/advertisement.actions";
import { selectPayment } from "../../../features/advertisement/advertisement.selectors";

const buttonStyles = {
    mt: 2,
    backgroundColor: "#ed2d4d"
};

const AdvertisementPackageCard: React.FC<AdvertisementPackage> = ({
    packageId,
    packageName,
    description,
    price,
    durationInDays,
    maxAds,
    active,
}) => {
    const userInfo = useSelector(selectUserInfo);
    const userPackageInfo = useSelector(selectUserPackageInfo);
    const paymentReturn = useSelector(selectPayment);

    const dispatch = useDispatch();

    const handleCreatePayment = async () => {
        try {
            const request = {
                appUserId: userInfo.sub,
                totalAmount: price,
                note: `${packageName}`,
                item: {
                    name: packageName,
                    quantity: 1,
                    price: price,
                    durationInDays,
                    maxAds,
                },
                adsPackageId: packageId
            };
            dispatch(requestCreatePayment({ request }));
        } catch (error) {
            console.error("Error creating payment:", error);
        }
    };

    React.useEffect(() => {
        if (paymentReturn && paymentReturn.checkoutUrl) {
            window.location.href = paymentReturn.checkoutUrl;
        }
    }, [paymentReturn]);

    // Determine if the package is lower or equal to the user's current package to disable it
    const isLowerPackage = userPackageInfo.currentPackage?.price >= price;

    // Define a chip tag to show if this is the current package
    const isActivePackage = userPackageInfo.currentPackage?.packageId === packageId;

    const disableAds = isLowerPackage || isActivePackage;
    console.log(disableAds)
    return (
        <Card variant="outlined" sx={{ minHeight: '300px', textAlign: 'center', boxShadow: 1, p: 3 }}>
            {/* Display active package chip if applicable */}
            {isActivePackage && (
                <Chip color="danger" variant="soft" sx={{ mb: 2, position:"absolute", fontSize: "14px" }}>Current</Chip>
            )}
            <CardContent>
                <Typography fontWeight="bold" sx={{ mb: 1 }}>
                    {packageName}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {description}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    GPT4 integration
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    Duration: {durationInDays} days
                </Typography>
                <Typography sx={{ mb: 1 }}>
                    Max Ads: {maxAds === 999 ? 'Unlimited' : maxAds}
                </Typography>
                <Typography color="danger" fontFamily="sans-serif" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                    {price.toFixed(2)} vnđ
                </Typography>

                {/* Purchase button, disabled for inactive and lower/equal packages */}
                <Button
                    variant="solid"
                    color={active && !isLowerPackage ? 'primary' : 'neutral'}
                    disabled={disableAds}
                    sx={{
                        // cursor: disableAds ? 'not-allowed' : 'pointed',
                        backgroundColor: "#ed2d4d"
                    }}
                    onClick={handleCreatePayment}
                >
                    {isLowerPackage ? 'Unavailable' : 'Upgrade'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default AdvertisementPackageCard;
