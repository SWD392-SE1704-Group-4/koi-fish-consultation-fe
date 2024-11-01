import React from 'react';
import { Box, Grid, Typography } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertisementList, selectAdvertisementPackageList } from '../../features/advertisement/advertisement.selectors';
import { requestGetListAdvertisementPackage } from '../../features/advertisement/advertisement.actions';
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import AdvertisementPackageCard from '../../components/organism/AdsPackageCard';

const AdsPackage: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const adsPackage = useSelector(selectAdvertisementPackageList);

    React.useEffect(() => {
        const request = {};
        dispatch(requestGetListAdvertisementPackage({request}));
    }, [dispatch]);

    return (
        <React.Fragment>
            <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
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
