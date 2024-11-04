import React from 'react';
import { Box, Avatar, Grid, Button, AspectRatio, Card, CardContent, CardOverflow, Divider, Typography, Stack, Chip } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import { setAdvertisement } from '../../../features/advertisement/advertisement.reducers';
import { setAdvertisementAction } from '../../../features/advertisement';
import { useDispatch } from 'react-redux';
import { Advertisement } from 'AppModels';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { timeAgo } from '../../../utils/timeAgo';
import VerifiedIcon from '@mui/icons-material/Verified';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const buttonStyles = {
    mt: 2,
    width: '20%',
    borderRadius: 5,
};

const AdvertisementCard: React.FC<any> = ({ advertisement }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        advertisementId,
        title,
        advertisementType,
        description,
        viewsCount,
        koiFishName,
        postedBy,
        createdAt,
        location,
        contactInfo,
        phone,
        address,
        additionalImages,
    } = advertisement;

    const limitDescription = (text: string, limit: number) => {
        const words = text.split(' ');
        return words.length > limit ? `${words.slice(0, limit).join(' ')}...` : text;
    };

    return (
        <Card variant="outlined">
            {additionalImages && (
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
                            <img
                                src={`${cloudfrontUrl + additionalImages[0]}`}
                                loading="lazy"
                                alt={title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <Typography
                                fontWeight={600}
                                fontSize={14}
                                sx={{
                                    position: 'absolute',
                                    color: 'white',
                                    top: 10,
                                    left: 10,
                                    backgroundColor: '#ed2d4d',
                                    padding: '4px 8px',
                                    borderRadius: '2px',
                                    // border: '1px solid white', // Add a light white border
                                }}
                            >
                                {advertisementType.typeName}
                            </Typography>
                        </Box>
                    </AspectRatio>
                </CardOverflow>
            )}
            <CardContent>
                <Stack spacing={1}>
                    <Typography level="title-md">{title}</Typography>
                    <Typography level="body-sm" textColor="text.secondary" sx={{ fontStyle: 'italic', mt: 1 }}>
                        Posted: {timeAgo(createdAt)}
                    </Typography>
                    <Box height={"120px"}>
                       <Typography level="body-sm" mt={1}>
                        {description}
                    </Typography> 
                    </Box>
                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={500} fontSize={14}>
                            Location:
                        </Typography>
                        <Typography fontWeight={400} fontSize={14}>
                            {location}
                        </Typography>
                    </Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={500} fontSize={14}>
                            Address:
                        </Typography>
                        <Typography fontWeight={400} fontSize={14}>
                            {address}
                        </Typography>
                    </Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={500} fontSize={14}>
                            Contact:
                        </Typography>
                        <Typography fontWeight={400} fontSize={14}>
                            {contactInfo}
                        </Typography>
                    </Box>
                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography fontWeight={500} fontSize={14}>
                            Phone:
                        </Typography>
                        <Typography fontWeight={400} fontSize={14}>
                            {phone}
                        </Typography>
                    </Box>

                    <Divider sx={{ my: 1 }} />

                    <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Box>
                            <Chip
                                color="success"
                                onClick={function () { }}
                                size="md"
                                variant="soft"
                                startDecorator={<VerifiedIcon />}>
                                Approved
                            </Chip>
                        </Box>
                        <Box sx={{ display: 'inline-flex', gap: 1, alignItems: 'start' }}>
                            <Typography fontWeight={500} fontSize={14}>
                                <VisibilityIcon />
                            </Typography>
                            <Typography fontWeight={500} fontSize={14}>
                                {viewsCount}
                            </Typography>

                        </Box>
                    </Box>

                    <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button
                            variant="outlined"
                            size="sm"
                            sx={{
                                ...buttonStyles,
                                borderColor: '#ed2d4d', // Change border color
                                color: '#ed2d4d', // Change text color to match the button color
                                backgroundColor: 'transparent', // Set background to transparent
                                px: 4, // Add horizontal padding
                            }}
                            onClick={() => {
                                dispatch(setAdvertisementAction(advertisement));
                                navigate(`/information/advertisement/${advertisementId}`);
                            }}>
                            View Details
                        </Button>
                        <Button
                            size="sm"
                            sx={{
                                ...buttonStyles,
                                backgroundColor: '#4CAF50', // Change to green color
                                color: 'white', // Set text color to white for contrast
                                px: 4, // Add horizontal padding
                            }}>
                            Contact
                        </Button>
                    </Box>

                </Stack>

            </CardContent>
        </Card>
        // <Link
        //         key={post.id}
        //         to={`/timeshare-details/${post?._id}`}
        //         style={{ textDecoration: "none" }}
        //       >
        //         <Card >
        //           <div className="tour__img">
        //             <AspectRatio minHeight="150px" maxHeight="250px">
        //               <img src={post?.images[0]} />
        //             </AspectRatio>
        //             {checkNewDate(post.timestamp) && (
        //                <span className="top"><b>New</b></span>
        //             )}

        //             <span className="bottom"><b>{post?.type}</b></span>
        //           </div>
        //           <CardBody>
        //             <div className='card__top d-flex align-items-center justify-content-between'>
        //               <span className='tour__location d-flex align-items-center gap-1'>
        //                 <i class="ri-map-pin-line"></i> {post?.resortId?.location}
        //               </span>

        //             </div>
        //             <h5 className='tour__title'>{post?.resortId?.name}</h5>
        //             <Stack >
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
        //                   <Typography fontWeight={500} fontSize={14}>
        //                       Unit:
        //                   </Typography>
        //                   <Typography fontWeight={400} fontSize={14}>
        //                       {post.unitId.name}
        //                   </Typography>
        //               </Box>
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
        //                 <Typography fontWeight={500} fontSize={14}>
        //                   Stay:
        //                 </Typography>
        //                 <Typography fontWeight={400} fontSize={14}>
        //                   {post?.numberOfNights} night
        //                 </Typography>
        //               </Box>
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between', }}>
        //                 <Typography fontWeight={500} fontSize={14}>
        //                   Check-in:
        //                 </Typography>
        //                 <Typography fontWeight={400} fontSize={14}>
        //                   {formatDate(post?.start_date)}
        //                 </Typography>
        //               </Box>
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
        //                 <Typography fontWeight={500} fontSize={14}>
        //                   Check-out:
        //                 </Typography>
        //                 <Typography fontWeight={400} fontSize={14}>
        //                   {formatDate(post?.end_date)}
        //                 </Typography>
        //               </Box>
        //               <Divider sx={{ mt: 1, mb: 1 }} />
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
        //                 <Typography fontWeight={500} fontSize={18}>
        //                   Price/night:
        //                 </Typography>
        //                 <Typography fontWeight={400} fontSize={18}>
        //                   {post?.pricePerNight}$
        //                 </Typography>
        //               </Box>
        //               <Box sx={{ width: 1, display: 'flex', justifyContent: 'space-between' }}>
        //                 <Typography fontWeight={500} fontSize={18}>
        //                   Total:
        //                 </Typography>
        //                 <Typography fontWeight={600} fontSize={18}>
        //                   {post.price}$
        //                 </Typography>
        //               </Box>
        //             </Stack>
        //           </CardBody>
        //         </Card>
        //       </Link>
    );
};

export default AdvertisementCard;
