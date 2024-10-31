import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { setAdvertisementAction, setAdvertisementDetailModalOpenAction } from '../../../../features/advertisement';
import GppGoodIcon from '@mui/icons-material/GppGood';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import { Avatar, Box, Typography } from '@mui/joy';
import React from 'react';
const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;
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
            field: 'price',
            headerName: 'Price ($)',
            type: 'number',
            width: 100,
        },
        {
            field: 'postedBy',
            headerName: 'Posted By',
            width: 200,
            renderCell: (params: any) => (params.row.postedBy &&
                <React.Fragment>
                    <Box sx={{display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                        <Avatar
                            sx={{ width: '25px', height: '25px' }}
                            variant="outlined"
                            src={cloudfrontUrl + params.row.postedBy?.profilePictureUrl}
                        />
                        <Typography> {params.row.postedBy?.username}</Typography>
                    </Box>

                </React.Fragment>
            ),
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
        {
            field: 'viewsCount',
            headerName: 'Views',
            type: 'number',
            width: 100,
        },
        {
            field: 'verified',
            headerName: 'Verified',
            width: 120,
            renderCell: (params: any) => (params.row.verified ? <GppGoodIcon sx={{ color: 'green' }} /> : <DoDisturbIcon sx={{ color: 'red' }} />),
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
