import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { setAdvertisementAction, setAdvertisementDetailModalOpenAction } from '../../../../features/advertisement';
import GppGoodIcon from '@mui/icons-material/GppGood';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

export const useAdvertisementColumns = () => {
    const dispatch = useDispatch();

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
            valueGetter: (params: any) =>
                params.row.createdAt
                    ? format(new Date(params.row.createdAt), 'yyyy-MM-dd')
                    : '',
        },
        // {
        //     field: 'expirationDate',
        //     headerName: 'Expiration Date',
        //     width: 150,
        //     valueGetter: (params: any) =>
        //         params.row.expirationDate
        //             ? format(new Date(params.row.expirationDate), 'yyyy-MM-dd')
        //             : '',
        // },
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
            renderCell: (params: any) => (params.row.adminVerified ? <GppGoodIcon sx={{color: 'green'}}/> : <DoDisturbIcon sx={{color: 'red'}}/>),
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ row }) => [
                <GridActionsCellItem
                    icon={<VisibilityIcon sx={{ color: 'green' }} />}
                    label="Edit"
                    className="textPrimary"
                    onClick={() => {
                        dispatch(setAdvertisementAction(row));
                        dispatch(setAdvertisementDetailModalOpenAction(true));
                    }}
                    color="inherit"
                />,
            ],
        },
    ];

    return advertisementColumns;
};