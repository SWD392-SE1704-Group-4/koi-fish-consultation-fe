import React from 'react';
import { Box, Typography, Grid, Button, Chip, Divider, Avatar } from '@mui/joy';
import { useParams, useNavigate } from 'react-router-dom';
import { Advertisement } from 'AppModels';
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/organism/Footer';
import Header from '../../components/organism/Header';
import { selectAdvertisement, selectAdvertisementInfo } from '../../features/advertisement/advertisement.selectors';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetAdvertisementById } from '../../features/advertisement/advertisement.actions';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const AdvertisementDetail: React.FC = () => {
    const { advertisementId } = useParams<{ advertisementId: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const advertisement = useSelector(selectAdvertisement);

    const buttonStyles = {
        mt: 2,
        width: '20%',
        borderRadius: 0,
        color: 'white',
        '&:hover': {
            backgroundColor: '#cc0000',
        },
    };

    const handleBackClick = () => {
        navigate('/information/advertisement');
    };

    React.useEffect(() => {
        const request = {
            advertisementId: advertisementId
        }
        dispatch(requestGetAdvertisementById({ request }));
    }, [dispatch, advertisementId]);

    if (!advertisement) {
        return <Typography>Advertisement not found.</Typography>;
    }

    return (
        <React.Fragment>
            <Header />
            <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>

                {/* Header Section */}
                <Box sx={{ mb: 4 }}>
                    <Chip
                        variant="solid"
                        color={advertisement.status === 'Active' ? 'success' : 'warning'}
                        sx={{ mt: 1, fontSize: '1rem', px: '12px' }}
                    >
                        {advertisement.advertisementType.typeName}
                    </Chip>
                </Box>

                <Divider sx={{ mb: 3 }} />

                {/* Main Content */}
                <Grid container spacing={3}>
                    {/* Image Gallery */}
                    <Grid xs={12} md={6}>
                        <ImageGallery
                            items={advertisement.additionalImages.map((url) => ({ original: cloudfrontUrl + url, thumbnail: cloudfrontUrl + url }))}
                            showPlayButton={false}
                        />
                    </Grid>

                    {/* Advertisement Information */}
                    <Grid xs={12} md={6}>
                        {/* Header Section */}
                        <Box sx={{ mb: 4 }}>
                            <Typography level="h2" sx={{ fontWeight: 'bold', color: '#333' }}>{advertisement.title}</Typography>
                            <Chip
                                variant="solid"
                                color={advertisement.status === 'Active' ? 'success' : 'warning'}
                                sx={{ mt: 1, fontSize: '1rem', px: '12px' }}
                            >
                                {advertisement.status}
                            </Chip>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ color: '#666', lineHeight: 1.5 }}>{advertisement.description}</Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Location</Typography>
                            <Typography>{advertisement.location}</Typography>
                        </Box>
                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Contact Information</Typography>
                            <Typography>{advertisement.contactInfo}</Typography>
                        </Box>
                        {/* User Information */}
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Posted By</Typography>
                            <Avatar
                                variant="outlined"
                                size="sm"
                                src={cloudfrontUrl + advertisement?.userInfo?.picture}
                            />
                            <Typography>Name: {advertisement.userInfo.given_name} {advertisement.userInfo.family_name}</Typography>
                            <Typography>Email: {advertisement.userInfo.email}</Typography>
                            <Typography>Phone: {advertisement.userInfo.phone_number}</Typography>
                            <Typography>Address: {advertisement.userInfo.address}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid xs={12} md={6}>
                    <Box sx={{ mb: 3 }}>

                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Koi Fish Details</Typography>
                        <Typography>Name: {advertisement.koiFish.koiFishName}</Typography>
                        <Typography>Color: {advertisement.koiFish.koiFishColor}</Typography>
                        <Typography>Size: {advertisement.koiFish.koiFishSize} cm</Typography>
                        <Typography>Age: {advertisement.koiFish.koiFishAge} years</Typography>
                        <Typography>Origin: {advertisement.koiFish.koiFishOrigin}</Typography>
                        <Typography>Symbolic Meaning: {advertisement.koiFish.symbolicMeaning}</Typography>
                        <Typography>Price: ${advertisement.koiFish.koiFishPrice}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Feng Shui Information</Typography>
                        <Typography>Element: {advertisement.koiFish.fengshuiElement.elementName}</Typography>
                        <Typography>Color: {advertisement.koiFish.fengshuiElement.elementColor}</Typography>
                        <Typography>Direction: {advertisement.koiFish.fengshuiElement.elementDirection}</Typography>
                        <Typography>Season: {advertisement.koiFish.fengshuiElement.elementSeason}</Typography>
                        <Typography>Yin/Yang: {advertisement.koiFish.fengshuiElement.elementYinYang}</Typography>
                    </Box>
                </Grid>
                <Divider sx={{ my: 3 }} />

                {/* Advertisement Details */}
                <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Additional Information</Typography>
                    <Typography>Location: {advertisement.location}</Typography>
                    <Typography>Type: {advertisement.advertisementType.typeName}</Typography>
                    <Typography>Views: {advertisement.viewsCount}</Typography>
                    <Typography>Expires on: {new Date(advertisement.expirationDate).toLocaleDateString()}</Typography>
                </Box>

                <Divider sx={{ my: 3 }} />

                {/* Footer Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button onClick={handleBackClick} sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                        Back to Listings
                    </Button>
                    <Button variant="solid" sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
                        Contact Seller
                    </Button>
                </Box>
            </Box>
            <Footer />
        </React.Fragment>
    );
};

export default AdvertisementDetail;
