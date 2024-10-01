import React from 'react';
import KoiFishCard from '../../molecule/KoiFishCard';
import { Grid } from '@mui/joy';
// Define the type for koiFishData
interface KoiFish {
    id: string;
    koiFishName: string;
    koiFishColor: string;
    koiFishSize: number;
    koiFishAge: number;
    koiFishPictures: string[];
    fengshuiElement: any; // Add the correct type for FengshuiElement if needed
    symbolicMeaning: string;
    energyType: string;
    favorableNumber: number;
    favorableColor: string;
    koiFishOrigin: string;
    koiFishDescription: string;
    koiFishPrice: number;
}

interface KoiFishListProps {
    koiFishData: KoiFish[]; // Expect koiFishData to be an array of KoiFish objects
}

const KoiFishList: React.FC<KoiFishListProps> = ({ koiFishData }) => {


    return (
        <Grid container spacing={3}> {/* Grid container with spacing */}
            {koiFishData.map((koiFish) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={koiFish.id}> {/* Each item takes up space depending on screen size */}
                    <KoiFishCard {...koiFish} /> {/* Spread KoiFishDTO properties to the card */}
                </Grid>
            ))}
        </Grid>
    );
};

export default KoiFishList;