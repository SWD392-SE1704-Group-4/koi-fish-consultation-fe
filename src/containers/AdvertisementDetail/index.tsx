import React from 'react';
import { Box, Typography, Grid, Button, Chip, Divider } from '@mui/joy';
import { useParams, useNavigate } from 'react-router-dom';
import { Advertisement } from 'AppModels';
import ImageGallery from 'react-image-gallery';

const AdvertisementDetail: React.FC = () => {
    const { advertisementId } = useParams<{ advertisementId: string }>();
    const navigate = useNavigate();

    // Mock data to illustrate. Replace with actual API call logic.
    const advertisement: Advertisement | null = {
        advertisementId: '1',
        title: 'Beautiful Red Koi Fish for Sale',
        description: 'This beautiful red koi fish is perfect for any pond...',
        location: '123 Koi Lane, City',
        contactInfo: 'Contact at +123-456-7890 or email@example.com',
        advertisementType: 'Sale',
        quantity: 10,
        viewsCount: 150,
        status: 'Active',
        adminVerified: true,
        expirationDate: '2024-12-31T23:59:59',
        koiFishId: 'koi1',
        // koiFishName: 'Red Koi',
        postedBy: 'user123',
        additionalImages: [
            'https://example.com/koi1.jpg',
            'https://example.com/koi2.jpg',
        ],
        tags: ['red', 'pond', 'sale'],
        createdAt: '2024-01-01T00:00:00',
        updatedAt: '2024-01-02T00:00:00',
    };

    const handleBackClick = () => {
        navigate('/advertisements');
    };

    if (!advertisement) {
        return <Typography>Advertisement not found.</Typography>;
    }

    return (
        <Box sx={{ p: 3 }}>
            {/* Header Section */}
            <Box sx={{ mb: 4 }}>
                <Typography level="h2">{advertisement.title}</Typography>
                <Chip variant="solid" color={advertisement.status === 'Active' ? 'success' : 'warning'} sx={{ mt: 1 }}>
                    {advertisement.status}
                </Chip>
            </Box>

            <Divider />

            {/* Main Content */}
            <Grid container spacing={3} sx={{ mt: 3 }}>
                {/* Image Gallery */}
                <Grid xs={12} md={6}>
                    <ImageGallery
                        items={advertisement.additionalImages.map((url) => ({ original: url, thumbnail: url }))}
                        showPlayButton={false}
                    />
                </Grid>

                {/* Advertisement Information */}
                <Grid xs={12} md={6}>
                    <Box sx={{ mb: 2 }}>
                        <Typography>{advertisement.description}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography>Koi Fish Details</Typography>
                        <Typography>Quantity: {advertisement.quantity}</Typography>
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <Typography>Contact Information</Typography>
                        <Typography>{advertisement.contactInfo}</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            {/* Advertisement Details */}
            <Box sx={{ mb: 2 }}>
                <Typography>Additional Information</Typography>
                <Typography>Location: {advertisement.location}</Typography>
                <Typography>Type: {advertisement.advertisementType}</Typography>
                <Typography>Views: {advertisement.viewsCount}</Typography>
                <Typography>Expires on: {new Date(advertisement.expirationDate).toLocaleDateString()}</Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Footer Section */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Button onClick={handleBackClick} variant="outlined" color="neutral">
                    Back to Listings
                </Button>
                <Button variant="solid" color="primary">
                    Contact Seller
                </Button>
            </Box>
        </Box>
    );
};

export default AdvertisementDetail;
