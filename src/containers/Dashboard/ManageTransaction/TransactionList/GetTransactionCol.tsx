import { GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Box, Typography } from '@mui/joy';
import React from 'react';

const cloudfrontUrl = process.env.REACT_APP_AWS_CLOUDFRONT_URL;

export const useTransactionColumns = () => {
    const dispatch = useDispatch();

    const transactionColumns: GridColDef<(any)[number]>[] = [
        {
            field: 'id',
            headerName: 'Transaction ID',
            width: 250,
        },
        {
            field: 'user',
            headerName: 'User',
            width: 200,
            renderCell: (params: any) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                        sx={{ width: 25, height: 25 }}
                        src={`${cloudfrontUrl}${params.row.user.profilePictureUrl}`}
                        variant="outlined"
                    >
                        U
                    </Avatar>
                    <Typography>{params.row.user.username}</Typography>
                </Box>
            ),
        },
        {
            field: 'orderCode',
            headerName: 'Order Code',
            width: 120,
        },
        {
            field: 'amount',
            headerName: 'Amount (VND)',
            type: 'number',
            width: 100,
        },
        {
            field: 'currency',
            headerName: 'Currency',
            width: 80,
        },
        {
            field: 'note',
            headerName: 'Note',
            width: 250,
        },
        {
            field: 'createdAt',
            headerName: 'Created Date',
            width: 150,
            valueGetter: (params: any) =>
                params.row.createdAt
                    ? format(new Date(params.row.createdAt), 'yyyy-MM-dd')
                    : '',
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            getActions: ({ row }) => [
                <GridActionsCellItem
                    icon={<VisibilityIcon sx={{ color: 'green' }} />}
                    label="View Details"
                    onClick={() => {
                        // Dispatch action to view transaction details
                        dispatch({ type: 'VIEW_TRANSACTION_DETAILS', payload: row });
                    }}
                />,
            ],
        },
    ];

    return transactionColumns;
};
