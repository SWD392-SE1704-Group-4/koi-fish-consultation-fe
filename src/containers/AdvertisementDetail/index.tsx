import React from 'react';
import { Box, Typography, Grid, Button, Chip, Divider, Avatar } from '@mui/joy';
import { useParams, useNavigate } from 'react-router-dom';
import { Advertisement } from 'AppModels';
import ImageGallery from 'react-image-gallery';
import Footer from '../../components/organism/Footer';
import Header from '../../components/organism/Header';
import { selectAdvertisement } from '../../features/advertisement/advertisement.selectors';
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
        };
        dispatch(requestGetAdvertisementById({ request }));
    }, [dispatch, advertisementId]);

    if (!advertisement) {
        return <Typography>Advertisement not found.</Typography>;
    }

    const isFishPond = advertisement.advertisementType.typeName === 'Fish pond';
    const isKoiFish = advertisement.advertisementType.typeName === 'Koi fish';

    return (
        <React.Fragment>
            <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
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

                <Grid container spacing={3}>
                    <Grid xs={12} md={6}>
                        <ImageGallery
                            items={advertisement.additionalImages.map((url) => ({
                                original: cloudfrontUrl + url,
                                thumbnail: cloudfrontUrl + url,
                            }))}
                            showPlayButton={false}
                        />
                    </Grid>

                    <Grid xs={12} md={6}>
                        <Box sx={{ mb: 4 }}>
                            <Typography level="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
                                {advertisement.title}
                            </Typography>
                            <Chip
                                variant="solid"
                                color={advertisement.status === 'Active' ? 'success' : 'warning'}
                                sx={{ mt: 1, fontSize: '1rem', px: '12px' }}
                            >
                                {advertisement.status}
                            </Chip>
                        </Box>
                        <Box sx={{ mb: 3 }}>
                            <Typography sx={{ color: '#666', lineHeight: 1.5 }}>
                                {advertisement.description}
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, mb: 3 }}>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ mb: 2 }}>
                                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Location</Typography>
                                    <Typography>{advertisement.location}</Typography>
                                </Box>
                                <Box sx={{ mb: 2 }}>
                                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Contact Information</Typography>
                                    <Typography>{advertisement.contactInfo}</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ flex: 1 }}>




                                {isFishPond && (
                                    <Box sx={{ mb: 2, flex: 1 }}>
                                        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Fish Pond Details</Typography>
                                        <Typography>Size: {advertisement.fishPond.pondSize} m²</Typography>
                                        <Typography>Depth: {advertisement.fishPond.pondDepth} m</Typography>
                                        <Typography>Is salt water: {advertisement.fishPond.isSaltwater}</Typography>
                                        <Typography>Has Waterfall: {advertisement.fishPond.hasWaterfall ? 'Yes' : 'No'}</Typography>
                                        <Typography>Has Plants: {advertisement.fishPond.hasPlants ? 'Yes' : 'No'}</Typography>
                                        <Typography>Has Rocks: {advertisement.fishPond.hasRocks ? 'Yes' : 'No'}</Typography>
                                        <Typography>Is Saltwater: {advertisement.fishPond.isSaltwater ? 'Yes' : 'No'}</Typography>
                                        <Typography>Pond Location: {advertisement.fishPond.pondLocation}</Typography>
                                    </Box>
                                )}

                                {isKoiFish && (
                                    <Box sx={{ mb: 2, flex: 1 }}>
                                        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Koi Fish Details</Typography>
                                        <Typography>Name: {advertisement.koiFish.koiFishName}</Typography>
                                        <Typography>Color: {advertisement.koiFish.koiFishColor}</Typography>
                                        <Typography>Origin: {advertisement.koiFish.koiFishOrigin}</Typography>
                                        <Typography>Symbolic Meaning: {advertisement.koiFish.symbolicMeaning}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, mb: 3 }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Posted By</Typography>
                                <Avatar
                                    variant="outlined"
                                    size="sm"
                                    src={cloudfrontUrl + advertisement?.postedBy?.picture}
                                    sx={{ mb: 1 }}
                                />
                                <Typography>Name: {advertisement.postedBy.lastName} {advertisement.postedBy.firstName}</Typography>
                                <Typography>Email: {advertisement.postedBy.email}</Typography>
                                <Typography>Phone: {advertisement.postedBy.phone_number}</Typography>
                                <Typography>Address: {advertisement.postedBy.address}</Typography>
                            </Box>

                            {isFishPond && (
                                <Box sx={{ flex: 1 }}>
                                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Pond Orientation</Typography>
                                    <Typography>Direction: {advertisement.fishPond.pondOrientation.directionName}</Typography>
                                    <Typography>Description: {advertisement.fishPond.pondOrientation.description}</Typography>
                                    <Typography>Element Association: {advertisement.fishPond.pondOrientation.elementAssociation}</Typography>
                                    <Typography>Yin-Yang Balance: {advertisement.fishPond.pondOrientation.yinYangBalance}</Typography>
                                    <Typography>Favorable Attributes: {advertisement.fishPond.pondOrientation.favorableAttributes}</Typography>
                                </Box>
                            )}
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                <Box sx={{ mb: 3 }}>
                    <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Additional Information</Typography>
                    <Typography>Location: {advertisement.location}</Typography>
                    <Typography>Type: {advertisement.advertisementType.typeName}</Typography>
                    <Typography>Views: {advertisement.viewsCount}</Typography>
                </Box>
                <Divider sx={{ my: 3 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                    <Button onClick={handleBackClick} sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
                        Back to Listings
                    </Button>
                    <Button variant="solid" sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
                        Contact Seller
                    </Button>
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default AdvertisementDetail;


// import React from 'react';
// import { Box, Typography, Grid, Button, Chip, Divider, Avatar } from '@mui/joy';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Advertisement } from 'AppModels';
// import ImageGallery from 'react-image-gallery';
// import Footer from '../../components/organism/Footer';
// import Header from '../../components/organism/Header';
// import { selectAdvertisement } from '../../features/advertisement/advertisement.selectors';
// import { useDispatch, useSelector } from 'react-redux';
// import { requestGetAdvertisementById } from '../../features/advertisement/advertisement.actions';

// const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

// const AdvertisementDetail: React.FC = () => {
//     const { advertisementId } = useParams<{ advertisementId: string }>();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const advertisement = useSelector(selectAdvertisement);

//     const buttonStyles = {
//         mt: 2,
//         width: '20%',
//         borderRadius: 0,
//         color: 'white',
//         '&:hover': {
//             backgroundColor: '#cc0000',
//         },
//     };

//     const handleBackClick = () => {
//         navigate('/information/advertisement');
//     };

//     React.useEffect(() => {
//         const request = {
//             advertisementId: advertisementId
//         };
//         dispatch(requestGetAdvertisementById({ request }));
//     }, [dispatch, advertisementId]);

//     if (!advertisement) {
//         return <Typography>Advertisement not found.</Typography>;
//     }

//     const isFishPond = advertisement.advertisementType.typeName === 'Fish pond';
//     const isKoiFish = advertisement.advertisementType.typeName === 'Koi fish';

//     return (
//         <React.Fragment>
//             <Header />
//             <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
//                 <Box sx={{ mb: 4 }}>
//                     <Chip
//                         variant="solid"
//                         color={advertisement.status === 'Active' ? 'success' : 'warning'}
//                         sx={{ mt: 1, fontSize: '1rem', px: '12px' }}
//                     >
//                         {advertisement.advertisementType.typeName}
//                     </Chip>
//                 </Box>
//                 <Divider sx={{ mb: 3 }} />

//                 <Grid container spacing={3}>
//                     <Grid xs={12} md={6}>
//                         <ImageGallery
//                             items={advertisement.additionalImages.map((url) => ({
//                                 original: cloudfrontUrl + url,
//                                 thumbnail: cloudfrontUrl + url,
//                             }))}
//                             showPlayButton={false}
//                         />
//                     </Grid>

//                     <Grid xs={12} md={6}>
//                         <Box sx={{ mb: 4 }}>
//                             <Typography level="h2" sx={{ fontWeight: 'bold', color: '#333' }}>
//                                 {advertisement.title}
//                             </Typography>
//                             <Chip
//                                 variant="solid"
//                                 color={advertisement.status === 'Active' ? 'success' : 'warning'}
//                                 sx={{ mt: 1, fontSize: '1rem', px: '12px' }}
//                             >
//                                 {advertisement.status}
//                             </Chip>
//                         </Box>
//                         <Box sx={{ mb: 3 }}>
//                             <Typography sx={{ color: '#666', lineHeight: 1.5 }}>
//                                 {advertisement.description}
//                             </Typography>
//                         </Box>

//                         {/* <Box sx={{ mb: 2 }}>
//                             <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Location</Typography>
//                             <Typography>{advertisement.location}</Typography>
//                         </Box>

//                         <Box sx={{ mb: 2 }}>
//                             <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Contact Information</Typography>
//                             <Typography>{advertisement.contactInfo}</Typography>
//                         </Box>

//                         <Box sx={{ mb: 3 }}>
//                             <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Posted By</Typography>
//                             <Avatar
//                                 variant="outlined"
//                                 size="sm"
//                                 src={cloudfrontUrl + advertisement?.postedBy?.picture}
//                             />
//                             <Typography>Name: {advertisement.postedBy.lastName} {advertisement.postedBy.firstName}</Typography>
//                             <Typography>Email: {advertisement.postedBy.email}</Typography>
//                             <Typography>Phone: {advertisement.postedBy.phone_number}</Typography>
//                             <Typography>Address: {advertisement.postedBy.address}</Typography>
//                         </Box> */}

//                         <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, mb: 3 }}>
//                             <Box sx={{ flex: 1 }}>
//                                 <Box sx={{ mb: 2 }}>
//                                     <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Location</Typography>
//                                     <Typography>{advertisement.location}</Typography>
//                                 </Box>
//                                 <Box sx={{ mb: 2 }}>
//                                     <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Contact Information</Typography>
//                                     <Typography>{advertisement.contactInfo}</Typography>
//                                 </Box>

//                             </Box>

//                             <Box sx={{ flex: 1 }}>
//                                 <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Posted By</Typography>
//                                 <Avatar
//                                     variant="outlined"
//                                     size="sm"
//                                     src={cloudfrontUrl + advertisement?.postedBy?.picture}
//                                     sx={{ mb: 1 }}
//                                 />
//                                 <Typography>Name: {advertisement.postedBy.lastName} {advertisement.postedBy.firstName}</Typography>
//                                 <Typography>Email: {advertisement.postedBy.email}</Typography>
//                                 <Typography>Phone: {advertisement.postedBy.phone_number}</Typography>
//                                 <Typography>Address: {advertisement.postedBy.address}</Typography>
//                             </Box>
//                         </Box>


//                         <Box sx={{ display: 'flex', justifyContent: 'space-around', gap: 2, mb: 3 }}>
//                             <Box sx={{ flex: 1 }}>

//                                 {isFishPond && (
//                                     <Box sx={{ mb: 2, flex: 1 }}>
//                                         <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Fish Pond Details</Typography>
//                                         <Typography>Size: {advertisement.fishPond.pondSize} m²</Typography>
//                                         <Typography>Depth: {advertisement.fishPond.pondDepth} m</Typography>
//                                         <Typography>Is salt water: {advertisement.fishPond.isSaltwater}</Typography>
//                                         <Typography>Has Waterfall: {advertisement.fishPond.hasWaterfall ? 'Yes' : 'No'}</Typography>
//                                         <Typography>Has Plants: {advertisement.fishPond.hasPlants ? 'Yes' : 'No'}</Typography>
//                                         <Typography>Has Rocks: {advertisement.fishPond.hasRocks ? 'Yes' : 'No'}</Typography>
//                                         <Typography>Is Saltwater: {advertisement.fishPond.isSaltwater ? 'Yes' : 'No'}</Typography>
//                                         {/* <Typography>Pond Orientation: {advertisement.fishPond.pondOrienta}</Typography>  */}
//                                         <Typography>Pond Location: {advertisement.fishPond.pondLocation}</Typography>
//                                     </Box>
//                                 )}

//                                 {isKoiFish && (
//                                     <Box sx={{ mb: 2, flex: 1 }}>
//                                         <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Koi Fish Details</Typography>
//                                         <Typography>Name: {advertisement.koiFish.koiFishName}</Typography>
//                                         <Typography>Color: {advertisement.koiFish.koiFishColor}</Typography>
//                                         {/* <Typography>Size: {advertisement.koiFish.koiFishSize} cm</Typography> */}
//                                         {/* <Typography>Age: {advertisement.koiFish.koiFishAge} years</Typography> */}
//                                         <Typography>Origin: {advertisement.koiFish.koiFishOrigin}</Typography>
//                                         <Typography>Symbolic Meaning: {advertisement.koiFish.symbolicMeaning}</Typography>
//                                         {/* <Typography>Price: ${advertisement.koiFish.koiFishPrice}</Typography> */}
//                                     </Box>
//                                 )}
//                             </Box>

//                             {isFishPond && (
//                                 <Box sx={{ flex: 1 }}>
//                                     bỏ code pond orientation vào đây nha gpt
//                                 </Box>)}
//                         </Box>
//                     </Grid>
//                 </Grid>

//                 <Divider sx={{ my: 3 }} />

//                 <Box sx={{ mb: 3 }}>
//                     <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Additional Information</Typography>
//                     <Typography>Location: {advertisement.location}</Typography>
//                     <Typography>Type: {advertisement.advertisementType.typeName}</Typography>
//                     <Typography>Views: {advertisement.viewsCount}</Typography>
//                     {/* <Typography>Expires on: {new Date(advertisement.expirationDate).toLocaleDateString()}</Typography> */}
//                 </Box>
//                 <Divider sx={{ my: 3 }} />

//                 <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
//                     <Button onClick={handleBackClick} sx={{ ...buttonStyles, backgroundColor: "#9e777c" }}>
//                         Back to Listings
//                     </Button>
//                     <Button variant="solid" sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
//                         Contact Seller
//                     </Button>
//                 </Box>
//             </Box>
//             <Footer />
//         </React.Fragment>
//     );
// };

// export default AdvertisementDetail;