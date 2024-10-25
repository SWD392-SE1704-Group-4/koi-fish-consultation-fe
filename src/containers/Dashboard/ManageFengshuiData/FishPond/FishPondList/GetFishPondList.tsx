import { GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { setFishPondAction, setFishPondDetailModalOpenAction } from '../../../../../features/fengshui';

export const useFishPondColumns = () => {
    const dispatch = useDispatch();

    const columns: GridColDef<(any)[number]>[] = [
        { field: 'pondName', headerName: 'Pond Name', width: 200 },
        { field: 'pondShape', headerName: 'Shape', width: 120 },
        { field: 'pondSize', headerName: 'Size (m²)', width: 120 },
        { field: 'pondDepth', headerName: 'Depth (m)', width: 120 },
        { field: 'pondMaterial', headerName: 'Material', width: 150 },
        // { field: 'hasWaterfall', headerName: 'Waterfall', width: 120, type: 'boolean' },
        // { field: 'hasPlants', headerName: 'Plants', width: 120, type: 'boolean' },
        // { field: 'hasRocks', headerName: 'Rocks', width: 120, type: 'boolean' },
        // { field: 'isSaltwater', headerName: 'Saltwater', width: 120, type: 'boolean' },
        // { field: 'numKoiFish', headerName: 'Number of Koi Fish', width: 150 },
        { field: 'waterCapacity', headerName: 'Water Capacity (m³)', width: 150 },
        { field: 'pondLocation', headerName: 'Location', width: 120 },
        { field: 'pondOrientation', headerName: 'Orientation', width: 120 },
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
                        dispatch(setFishPondAction(row));
                        dispatch(setFishPondDetailModalOpenAction(true));
                    }}
                    color="inherit"
                />,
            ],
        },
    ];

    return columns;
};
