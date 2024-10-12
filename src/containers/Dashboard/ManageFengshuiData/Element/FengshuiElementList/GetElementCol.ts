import { Box, Typography } from "@mui/joy";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { fengShuiElementLogos } from "../../../../../constants/Fengshui/Logo";
const columns: GridColDef<(any)[number]>[] = [
    {
        field: 'logo',
        headerName: 'Icon',
        width: 100,
        renderCell: (params: any) => {
            const LogoIcon = fengShuiElementLogos[params.row.elementName];
            return LogoIcon;
        },
    },
    {
        field: 'elementName',
        headerName: 'Element',
        width: 120,
    },
    {
        field: 'elementColor',
        headerName: 'Color',
        width: 90,
    },
    {
        field: 'elementDirection',
        headerName: 'Direction',
        width: 100,
    },
    {
        field: 'elementSeason',
        headerName: 'Season',
        width: 100,
    },
    {
        field: 'elementYinYang',
        headerName: 'Yin/Yang',
        sortable: false,
        width: 100,
    },
    {
        field: 'elementAssociatedAnimals',
        headerName: 'Associated Animals',
        sortable: false,
        width: 150,
    },
    {
        field: 'elementStrength',
        headerName: 'Strength',
        type: 'number',
        sortable: false,
        width: 80,
    },
];

export default columns;