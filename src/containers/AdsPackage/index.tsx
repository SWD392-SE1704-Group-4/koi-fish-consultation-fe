import React from 'react';
import { Box, Grid, Typography } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertisementList, selectAdvertisementPackageList } from '../../features/advertisement/advertisement.selectors';
import { requestGetListAdvertisementPackage } from '../../features/advertisement/advertisement.actions';
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import AdvertisementPackageCard from '../../components/organism/AdsPackageCard';
import { selectUserPackageInfo } from '../../features/auth/auth.selectors';

const AdsPackage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const adsPackage = useSelector(selectAdvertisementPackageList);
    const userPackageInfo = useSelector(selectUserPackageInfo);

    React.useEffect(() => {
        const request = {};
        dispatch(requestGetListAdvertisementPackage({ request }));
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="about-us-container">
                <div className="about-us-image">
                    <img
                        src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
                        alt="About Us"
                        className="about-us-img"
                    />
                </div>
                <div className="about-us-text">
                    <h1>Ads package</h1>
                </div>
                <div className="additional-content"></div>
            </div>
            <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>

                {/* Display remaining ads and expiry date for the current package */}
                {userPackageInfo?.currentPackage && (
                    <Box my={1}>
                        <Typography sx={{ mt: 2 }}><b>Remaining Ads:</b> {userPackageInfo.remainingAds}</Typography>
                        <Typography sx={{ mt: 1 }}><b>Expires on:</b> {new Date(userPackageInfo.packageExpiryDate).toLocaleDateString()}</Typography>
                    </Box>
                )}
                <Grid container spacing={4}>
                    <Grid xs={12} md={12} container spacing={3}>
                        {adsPackage && adsPackage.length > 0 ? (
                            adsPackage?.map(ad => (
                                <Grid xs={12} sm={6} md={4} lg={4} key={ad.packageId}>
                                    <AdvertisementPackageCard
                                        packageId={ad.packageId}
                                        packageName={ad.packageName}
                                        description={ad.description}
                                        price={ad.price}
                                        durationInDays={ad.durationInDays}
                                        maxAds={ad.maxAds}
                                        active={ad.active}
                                    />
                                </Grid>
                            ))
                        ) : (
                            <Typography>No ads package available.</Typography>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default AdsPackage;
