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
            <div className="about-us-container">
                <div className="about-us-image">
                    <img
                        src="https://www.tallengestore.com/cdn/shop/files/KoiFish_JapaneseCarp_InAPond-FengShuiPainting_d2320422-7ad3-4d93-8471-8f60d5c23b0d.jpg?v=1721249681"
                        alt="About Us"
                        className="about-us-img"
                    />
                </div>
                <div className="about-us-text">
                    <h1>Koi fish</h1>
                </div>
                <div className="additional-content"></div>
            </div>
            <div style={{ padding: '0 80px' }}>
                <div style={{ marginTop: '20px' }}>
                    <KoiFishList koiFishData={filteredKoiFish} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default KoiFishPage;
