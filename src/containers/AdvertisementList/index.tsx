import React from 'react';
import { Box, Grid, Typography, TextField, Button, Divider } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertisementList } from '../../features/advertisement/advertisement.selectors';
import { requestGetListAdvertisement } from '../../features/advertisement/advertisement.actions';
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import AdvertisementCard from '../../components/organism/AdvertisementCard';

const AdvertisementPage: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const advertisements = useSelector(selectAdvertisementList);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
        const request = {};
        dispatch(requestGetListAdvertisement({ request }));
    }, [dispatch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleFilterApply = () => {
        // Logic for applying the filters can be added here.
    };

    return (
        <React.Fragment>
            <Header />
            <Box sx={{ px: '40px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                <Grid container spacing={3}>
                    {/* Left Column: Filters */}
                    <Grid xs={12} md={2}>
                        <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
                            <Typography level="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Filters</Typography>
                            <Divider sx={{ mb: 2 }} />

                            {/* Search */}
                            {/* <TextField
                                value={searchTerm}
                                onChange={handleSearchChange}
                                fullWidth
                                sx={{ mb: 2 }}
                            /> */}

                            {/* Filter by Feng Shui Element */}
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Feng Shui Element</Typography>
                            {/* Replace with actual filter component */}
                            <Button fullWidth sx={{ mb: 2 }}>Select Element</Button>

                            {/* Filter by Koi Fish Type */}
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Koi Fish Type</Typography>
                            {/* Replace with actual filter component */}
                            <Button fullWidth sx={{ mb: 2 }}>Select Type</Button>

                            {/* Filter by Advertisement Type */}
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Advertisement Type</Typography>
                            {/* Replace with actual filter component */}
                            <Button fullWidth sx={{ mb: 2 }}>Select Advertisement Type</Button>

                            <Divider sx={{ my: 2 }} />

                            <Button variant="solid" color="primary" fullWidth onClick={handleFilterApply}>
                                Apply Filters
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Column: Advertisements */}
                    <Grid xs={12} md={10} container spacing={3}>
                            {advertisements && advertisements.length > 0 ? (
                                advertisements.map(ad => (
                                    <Grid xs={12} sm={6} md={4} lg={3} key={ad.advertisementId}>
                                        <AdvertisementCard key={ad.advertisementId} advertisement={ad} />
                                    </Grid>
                                ))
                            ) : (
                                <Typography>No advertisements available.</Typography>
                            )}
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </React.Fragment>
    );
};

export default AdvertisementPage;
