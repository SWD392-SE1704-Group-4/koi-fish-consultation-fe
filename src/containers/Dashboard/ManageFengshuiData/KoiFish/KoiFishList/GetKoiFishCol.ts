import { Box, Typography } from "@mui/joy";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fengShuiElementLogos } from "../../../../../constants/Fengshui/Logo";
const columns: GridColDef<(any)[number]>[] = [
    { field: 'koiFishName', headerName: 'Koi Fish Name', width: 150 },
    { field: 'koiFishColor', headerName: 'Color', width: 120 },
    { field: 'koiFishSize', headerName: 'Size (cm)', width: 120 },
    { field: 'koiFishAge', headerName: 'Age (years)', width: 120 },
    { field: 'symbolicMeaning', headerName: 'Symbolic Meaning', width: 150 },
    { field: 'favorableNumber', headerName: 'Favorable Number', width: 150 },
    { field: 'favorableColor', headerName: 'Favorable Color', width: 150 },
    { field: 'koiFishOrigin', headerName: 'Origin', width: 120 },
    { field: 'koiFishPrice', headerName: 'Price', width: 120 },
];

export default columns;