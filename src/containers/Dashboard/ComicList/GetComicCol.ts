import { Box, Typography } from "@mui/joy";
import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<any>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Comic name',
        width: 150,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'Type',
        width: 90,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'number',
        width: 50,
        editable: true,
    },
    {
        field: 'content',
        headerName: 'Content',
        width: 110,
        editable: true,
    },
    {
        field: 'posterPath',
        headerName: 'Poster',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        //   valueGetter: (value, row) => `<img src="${value}" width="500" height="600">`,
    },
];

export default columns;