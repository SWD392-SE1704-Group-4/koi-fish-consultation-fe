import React from 'react';
import { Card, Typography, IconButton, AspectRatio, CardContent, Button } from '@mui/joy';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';

interface KoiFishDTO {
    id: string;
    koiFishName: string;
    koiFishColor: string;
    koiFishSize: number;
    koiFishAge: number;
    koiFishPictures: string[];
    fengshuiElement: {
        elementName: string;
    };
    symbolicMeaning: string;
    energyType: string;
    favorableNumber: number;
    favorableColor: string;
    koiFishOrigin: string;
    koiFishDescription: string;
    koiFishPrice: number;
}

const KoiFishCard: React.FC<KoiFishDTO> = ({
    koiFishName,
    koiFishColor,
    koiFishSize,
    koiFishAge,
    koiFishPictures,
    fengshuiElement,
    symbolicMeaning,
    koiFishPrice,
}) => {
    

    return (
        <Card sx={{ width: 320 }}>
            <div style={{ minHeight: '140px'}}>
                <Typography level="title-lg">{koiFishName}</Typography>
                <Typography level="body-sm">
                    {`Age: ${koiFishAge} years | Color: ${koiFishColor} | Size: ${koiFishSize} cm`}
                </Typography>
                <Typography level="body-sm">{`Feng Shui Element: ${fengshuiElement?.elementName}`}</Typography>
                <Typography level="body-sm">{`Symbolic Meaning: ${symbolicMeaning}`}</Typography>
                <IconButton
                    aria-label={`bookmark ${koiFishName}`}
                    variant="plain"
                    color="neutral"
                    size="sm"
                    sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
                >
                    <BookmarkAdd />
                </IconButton>
            </div>
            <AspectRatio minHeight="120px" maxHeight="200px">
                <img
                    src={"https://d114iff5rn0elq.cloudfront.net/"+koiFishPictures?.[0]} // Fallback in case no picture exists
                    alt={koiFishName}
                    loading="lazy"
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography level="body-xs">Price:</Typography>
                    <Typography sx={{ fontSize: 'lg', fontWeight: 'lg' }}>${koiFishPrice}</Typography>
                </div>
                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    aria-label={`Explore ${koiFishName}`}
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Explore
                </Button>
            </CardContent>
        </Card>
    );
};

export default KoiFishCard;
