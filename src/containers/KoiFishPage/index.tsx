import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, MenuItem } from '@mui/material';
import KoiFishList from '../../components/organism/KoiFishList';
import { GetKoiFish } from '../../services/koifish';
import Header from '../../components/organism/Header';
import { Typography } from '@mui/joy';

interface FengshuiElementDTO {
    id: string;
    elementName: string;
}

const KoiFishPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedElement, setSelectedElement] = useState<string>('');
    const [fengshuiElements, setFengshuiElements] = useState<FengshuiElementDTO[]>([]);
    const [filteredKoiFish, setFilteredKoiFish] = useState<any[]>([]);

    useEffect(() => {
        const fetchFengshuiElements = async () => {
            try {
                const response = await GetKoiFish({});
                const data = await response.data.payload;
                console.log(data)
                setFilteredKoiFish(data);
            } catch (error) {
                console.error('Error fetching Feng Shui elements:', error);
            }
        };

        fetchFengshuiElements();
    }, []);

    // Handle search term changes
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    // Handle Feng Shui element selection
    const handleElementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedElement(event.target.value);
    };

    // Fetch filtered koi fish based on search and selected element
    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/koi-fish?name=${searchTerm}&element=${selectedElement}`);
            const data = await response.json();
            setFilteredKoiFish(data);
        } catch (error) {
            console.error('Error fetching filtered koi fish:', error);
        }
    };

    return (
        <React.Fragment>
            <div style={{ padding: '0 80px' }}>
                <Typography style={{ fontSize: '50px' }}>Koi Fish List</Typography>
                <div style={{ marginTop: '20px' }}>
                    <KoiFishList koiFishData={filteredKoiFish} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default KoiFishPage;
