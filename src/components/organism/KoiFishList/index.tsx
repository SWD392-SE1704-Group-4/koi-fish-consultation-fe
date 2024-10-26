import React from 'react';
import KoiFishCard from '../../molecule/KoiFishCard';
import { Grid } from '@mui/joy';
import KoiFishPreviewCard from '../KoiFishPreviewCard';

interface KoiFish {
    id: string;
    koiFishName: string;
    koiFishColor: string;
    koiFishSize: number;
    koiFishAge: number;
    koiFishPictures: string[];
    fengshuiElement: any; 
    symbolicMeaning: string;
    energyType: string;
    favorableNumber: number;
    favorableColor: string;
    koiFishOrigin: string;
    koiFishDescription: string;
    koiFishPrice: number;
}

interface KoiFishListProps {
    koiFishData: KoiFish[]; 
}

const KoiFishList: React.FC<KoiFishListProps> = ({ koiFishData }) => {
    return (
        <Grid container spacing={3}> 
            {koiFishData.map((koiFish) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={koiFish.id}>
                    <KoiFishPreviewCard koiFish={koiFish} />
                </Grid>
            ))}
        </Grid>
    );
};

export default KoiFishList;