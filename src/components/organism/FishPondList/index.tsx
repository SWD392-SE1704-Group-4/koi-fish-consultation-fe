import React from 'react';
import FishPondPreviewCard from '../FishPondPreviewCard';
import { Grid } from '@mui/joy';
import { FishPond } from 'AppModels';


interface FishPondListProps {
    fishPondData: FishPond[]
}

const FishPondList: React.FC<FishPondListProps> = ({ fishPondData }) => {
    return (
        <Grid container spacing={3}>
            {fishPondData.map((fishPond) => (
                <Grid xs={12} sm={6} md={4} lg={3} key={fishPond.pondId}>
                    <FishPondPreviewCard fishPond={fishPond} />
                </Grid>
            ))}
        </Grid>
    );
};

export default FishPondList;
