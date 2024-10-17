import React from 'react';
import { Box } from '@mui/joy';
import { selectAdvertisementList } from '../../features/advertisement/advertisement.selectors';
import { useDispatch, useSelector } from 'react-redux';
import AdvertisementCard from '../../components/organism/AdvertisementCard';
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import { requestGetListAdvertisement } from '../../features/advertisement/advertisement.actions';


const AdvertisementPage: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const advertisements = useSelector(selectAdvertisementList);
    React.useEffect(()=>{
        const request = {
        };
        dispatch(requestGetListAdvertisement({request}));
    },[])
    return (
        <React.Fragment>
            <Header></Header>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
                padding={2}
            >
                {advertisements && advertisements.length > 0 ? (
                    advertisements.map(ad => (
                        <AdvertisementCard key={ad.advertisementId} advertisement={ad} />
                    ))
                ) : (
                    <p>No advertisements available.</p>
                )}
            </Box>
            <Footer></Footer>
        </React.Fragment>

    );
};

export default AdvertisementPage;
