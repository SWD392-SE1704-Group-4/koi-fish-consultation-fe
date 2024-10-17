import { GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';

const advertisementColumns: GridColDef<(any)[number]>[] = [
    {
        field: 'title',
        headerName: 'Title',
        width: 200,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 120,
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 150,
    },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 100,
    },
    {
        field: 'postedBy',
        headerName: 'Posted By',
        width: 150,
        valueGetter: (params: any) => params.row.postedBy ?? 'Unknown',
    },
    {
        field: 'createdAt',
        headerName: 'Posted Date',
        width: 150,
        valueGetter: (params: any) => params.row.createdAt ? format(new Date(params.row.createdAt), 'yyyy-MM-dd') : '',
    },
    {
        field: 'expirationDate',
        headerName: 'Expiration Date',
        width: 150,
        valueGetter: (params: any) => params.row.expirationDate ? format(new Date(params.row.expirationDate), 'yyyy-MM-dd') : '',
    },
    {
        field: 'viewsCount',
        headerName: 'Views',
        type: 'number',
        width: 100,
    },
    {
        field: 'adminVerified',
        headerName: 'Verified',
        width: 120,
        renderCell: (params: any) => (params.row.adminVerified ? 'Yes' : 'No'),
    },
];

export default advertisementColumns;
