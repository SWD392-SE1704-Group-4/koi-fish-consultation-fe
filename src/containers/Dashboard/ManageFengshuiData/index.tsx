import React from "react";
import DashboardBoard from "../../../components/organism/BoardLayout";
import Element from "./Element";
import { Box } from "@mui/joy";
import KoiFish from "./KoiFish";
import FishPond from "./FishPond";

const ManageFengshuiDataDashboard: React.FC = (): JSX.Element => {
  const [collapsed, setCollapsed] = React.useState(false);
  const handleItemsChange = (updatedItems) => {
    setItems(updatedItems);
  };
  const [items, setItems] = React.useState([
    {
      id: "1",
      rowSpan: 5,
      columnSpan: 4,
      data: { title: "Koi fish", content: <KoiFish /> }
    },
    {
      id: "2",
      rowSpan: 5,
      columnSpan: 4,
      data: { title: "Fish pond", content: <FishPond /> }
    },
    {
      id: "3",
      rowSpan: 5,
      columnSpan: 3,
      data: { title: "Element", content: <Element /> }
    },
  ]);
  return (
    <Box sx={{paddingBottom: '24px'}}>
      <DashboardBoard items={items} onItemsChange={handleItemsChange} />
    </Box>
  );
}

export default ManageFengshuiDataDashboard;