import React from 'react';
import { Box, Avatar, Grid, Button, AspectRatio, Card, CardContent, CardOverflow, Divider, Typography, Stack, Chip } from '@mui/joy';
import { Link, useNavigate } from 'react-router-dom';
import { setAdvertisement } from '../../../features/advertisement/advertisement.reducers';
import { setAdvertisementAction } from '../../../features/advertisement';
import { useDispatch } from 'react-redux';
import { Advertisement } from 'AppModels';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PendingIcon from '@mui/icons-material/Pending';
import VerifiedIcon from '@mui/icons-material/Verified';
import { timeAgo } from '../../../utils/timeAgo';

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
        location,
        contactInfo,
        phone,
        address,
        additionalImages,
        verified,
        createdAt
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
                        {verified ? <Chip
                            color="success"
                            onClick={function () { }}
                            size="md"
                            variant="soft"
                            startDecorator={<VerifiedIcon />}>
                            Approved
                        </Chip> :
                            <Chip
                                color="danger"
                                onClick={function () { }}
                                size="md"
                                variant="outlined"
                                startDecorator={<PendingIcon />}>
                                Waiting approval
                            </Chip>}
                        <Box sx={{ display: 'inline-flex', gap: 1, alignItems: 'start' }}>
                            <Typography fontWeight={500} fontSize={14}>
                                <VisibilityIcon />
                            </Typography>
                            <Typography fontWeight={500} fontSize={14}>
                                {viewsCount}
                            </Typography>
                        </Box>
                    </Box>

                </Stack>

            </CardContent>
        </Card>
    );
};

export default AdvertisementCard;
