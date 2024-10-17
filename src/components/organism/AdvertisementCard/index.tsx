import React from 'react';
import { Box, Card, CardContent, Typography, Avatar, Grid, Button } from '@mui/joy';
const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;
const AdvertisementCard = ({ advertisement }) => {
    const {
        title,
        description,
        location,
        viewsCount,
        koiFishName,
        postedBy,
        userInfo
    } = advertisement;

    return (
        <Card variant="outlined" sx={{ width: 300, margin: 2 }}>
            <CardContent>
                {/* User Information */}
                <Grid container spacing={1} alignItems="center">
                    <Grid>
                        <Avatar
                            src={userInfo?.picture ? `${cloudfrontUrl + userInfo.picture}` : '/default-avatar.png'}
                            alt={postedBy}
                            sx={{ width: 40, height: 40 }}
                        />
                    </Grid>
                    <Grid>
                        <Typography>{`${userInfo?.given_name} ${userInfo?.family_name}`}</Typography>
                        <Typography color="neutral">
                            {postedBy}
                        </Typography>
                    </Grid>
                </Grid>
                
                {/* Advertisement Title */}
                <Typography fontWeight="bold" mt={2}>
                    {title}
                </Typography>

                {/* Advertisement Description */}
                <Typography  color="neutral" mt={1} mb={1}>
                    {description.length > 50 ? `${description.substring(0, 50)}...` : description}
                </Typography>

                {/* Location and Views */}
                <Typography  color="neutral" mt={1}>
                    <strong>Location:</strong> {location}
                </Typography>
                <Typography  color="neutral" mt={1}>
                    <strong>Views:</strong> {viewsCount}
                </Typography>

                {/* Koi Fish Name */}
                <Typography color="neutral" mt={1} mb={1}>
                    <strong>Koi Fish:</strong> {koiFishName}
                </Typography>

                {/* Buttons */}
                <Box mt={2} display="flex" justifyContent="space-between">
                    <Button variant="outlined" size="sm">
                        View Details
                    </Button>
                    <Button variant="solid" size="sm" color="primary">
                        Contact
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default AdvertisementCard;
