import React from 'react';
import { Box, Avatar, Grid, Button, AspectRatio, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { setAdvertisement } from '../../../features/advertisement/advertisement.reducers';
import { setAdvertisementAction } from '../../../features/advertisement';
import { useDispatch } from 'react-redux';
import { Advertisement } from 'AppModels';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

const buttonStyles = {
    mt: 2,
    width: '20%',
    borderRadius: 0,
};

const AdvertisementCard: React.FC<any> = ({ advertisement }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        advertisementId,
        title,
        advertisementType,
        description,
        location,
        viewsCount,
        koiFishName,
        postedBy,
        userInfo,
        additionalImages,
    } = advertisement;

    return (
        <Card variant="outlined">
            {/* Image Section */}
            {additionalImages && (
                <CardOverflow>
                    <AspectRatio ratio="2">
                        <img
                            src={`${cloudfrontUrl + additionalImages}`}
                            loading="lazy"
                            alt={title}
                        />
                    </AspectRatio>
                </CardOverflow>
            )}

            <CardContent>
                {/* User Information */}
                <CardOverflow>
                    <Grid container spacing={1} alignItems="center">
                        <Grid>
                            <Avatar
                                src={userInfo?.picture ? `${cloudfrontUrl + userInfo.picture}` : '/default-avatar.png'}
                                alt={postedBy}
                                sx={{ width: 40, height: 40 }}
                            />
                        </Grid>
                        <Grid>
                            <Typography level="body-md">{`${userInfo?.given_name} ${userInfo?.family_name}`}</Typography>
                            <Typography level="body-sm" color="neutral">
                                {postedBy}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardOverflow>

                <Divider sx={{ my: 1 }} />

                {/* Advertisement Title */}
                <Typography level="title-md" mt={1} mb={1} fontWeight="bold">
                    {title}
                </Typography>

                {/* Advertisement Description */}
                <Typography level="body-sm" mb={1}>
                    {description.length > 50 ? `${description.substring(0, 50)}...` : description}
                </Typography>
                <Typography level="body-sm" color="neutral" mt={1} mb={1}>
                    <strong>Type:</strong> {advertisementType.typeName}
                </Typography>
                {/* Location and Views */}
                <Typography level="body-sm" color="neutral">
                    <strong>Location:</strong> {location}
                </Typography>

                {/* Koi Fish Name */}
                <Typography level="body-sm" color="neutral" mt={1} mb={1}>
                    <strong>Koi Fish:</strong> {koiFishName}
                </Typography>

                <Divider sx={{ my: 1 }} />
                <Typography level="body-sm" color="neutral" mt={1}>
                    <strong>Views:</strong> {viewsCount}
                </Typography>
                {/* Buttons */}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button
                        variant="outlined"
                        size="sm"
                        sx={{ ...buttonStyles }}
                        onClick={() => { 
                            dispatch(setAdvertisementAction(advertisement))
                            navigate(`/information/advertisement/${advertisementId}`) }}>
                        View Details
                    </Button>
                    <Button
                        size="sm"
                        sx={{ ...buttonStyles, backgroundColor: "#ed2d4d" }}>
                        Contact
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AdvertisementCard;
