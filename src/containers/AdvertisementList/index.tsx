import React from 'react';
import { Box, Grid, Typography, TextField, Button, Divider, Checkbox } from '@mui/joy';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertisementList, selectAdvertisementTypeList } from '../../features/advertisement/advertisement.selectors';
import { requestGetListAdvertisement, requestGetListAdvertisementType } from '../../features/advertisement/advertisement.actions';
import Header from '../../components/organism/Header';
import Footer from '../../components/organism/Footer';
import AdvertisementCard from '../../components/organism/AdvertisementCard';
import { FormControlLabel, FormGroup } from '@mui/material';
import { requestGetFengshuiElement } from '../../features/fengshui/fengshui.actions';
import { selectFenghsuiElementList } from '../../features/fengshui/fengshui.selectors';
import { fengShuiElementLogos } from '../KoiFishDetail';

const AdvertisementPage: React.FC<any> = (): JSX.Element => {
    const dispatch = useDispatch();
    const advertisements = useSelector(selectAdvertisementList);
    const fengshuiElements = useSelector(selectFenghsuiElementList);
    const adsType = useSelector(selectAdvertisementTypeList);
    const [searchTerm, setSearchTerm] = React.useState('');

    React.useEffect(() => {
        const request = {};
        dispatch(requestGetListAdvertisement({ request }));
        dispatch(requestGetFengshuiElement({ request }));
        dispatch(requestGetListAdvertisementType({ request }));
    }, [dispatch]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    const [selectedElements, setSelectedElements] = React.useState({});

    // Toggle selection of an element
    const handleElementChange = (elementId) => {
        setSelectedElements((prev) => ({
            ...prev,
            [elementId]: !prev[elementId],
        }));
    };

    const [selectedTypes, setSelectedTypes] = React.useState({});

    // Handler for checkbox change
    const handleTypeChange = (typeId) => {
        setSelectedTypes(prev => ({
            ...prev,
            [typeId]: !prev[typeId]
        }));
    };


    const handleFilterApply = () => {
        // Logic for applying the filters can be added here.
    };

    return (
        <React.Fragment>
            <Box sx={{ px: '80px', py: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
                <Grid container spacing={4}>
                    <Grid xs={12} md={2} p={0}>

                        <Typography level="h4" sx={{ mb: 2, fontWeight: 'bold' }}>Filters</Typography>
                        <Divider sx={{ mb: 2 }} />

                        {/* Search */}
                        {/* <TextField
                            value={searchTerm}
                            onChange={handleSearchChange}
                            fullWidth
                            sx={{ mb: 2 }}
                        /> */}
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', mb: 2 }}>Advertisement Type</Typography>
                            <FormGroup>
                                {adsType?.map((type) => (
                                    <FormControlLabel
                                        key={type.id}
                                        control={
                                            <Checkbox
                                                checked={selectedTypes[type.id] || false}
                                                onChange={() => handleTypeChange(type.id)}
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <Box ml="10px" display="flex" alignItems="center" gap={1}>
                                                <Typography>{type.typeName}</Typography>
                                            </Box>}
                                    />
                                ))}
                            </FormGroup>
                        </Box>
                        <Typography sx={{ fontWeight: 'bold', mb: 1 }}>Feng Shui Element</Typography>
                        <Box sx={{ fontWeight: 'bold', mt: 1 }}>
                            <FormGroup>
                                {fengshuiElements?.map((element) => (
                                    <FormControlLabel
                                        key={element.elementId}
                                        control={
                                            <Checkbox
                                                checked={selectedElements[element.elementId] || false}
                                                onChange={() => handleElementChange(element.elementId)}
                                                color="primary"
                                            />
                                        }
                                        label={
                                            <Box display="flex" alignItems="center" gap={1}>
                                                <Box ml="10px">
                                                    {fengShuiElementLogos[element.elementName] && (
                                                        fengShuiElementLogos[element.elementName]
                                                    )}
                                                </Box>

                                                <Typography>{element.elementName}</Typography>
                                            </Box>
                                        }
                                    />
                                ))}
                            </FormGroup>
                        </Box>

                    </Grid>

                    {/* Right Column: Advertisements */}
                    <Grid xs={12} md={10} container spacing={3}>
                        {advertisements && advertisements.length > 0 ? (
                            advertisements.map(ad => (
                                <Grid xs={12} sm={6} md={4} lg={4} key={ad.advertisementId}>
                                    <AdvertisementCard key={ad.advertisementId} advertisement={ad} />
                                </Grid>
                            ))
                        ) : (
                            <Typography>No advertisements available.</Typography>
                        )}
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );
};

export default AdvertisementPage;
