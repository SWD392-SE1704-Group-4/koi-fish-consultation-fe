// import { ThemeProvider } from "@emotion/react";

import { Box, Typography } from "@mui/joy";
import DashboardBoard from "../../../components/organism/BoardLayout";
import React from "react";
import AdvertisementList from "./AdvertisementList";

const ManageAdvertisement: React.FC = (): JSX.Element => {
    const [collapsed, setCollapsed] = React.useState(false);
    const handleItemsChange = (updatedItems) => {
        setItems(updatedItems);
    };
    const [items, setItems] = React.useState([
        {
            id: "1",
            rowSpan: 5,
            columnSpan: 5,
            data: { title: "Advertisement list", content: <AdvertisementList /> }
        },
    
    ]);
    return (
        <DashboardBoard items={items} onItemsChange={handleItemsChange} />
    );
}

export default ManageAdvertisement;
