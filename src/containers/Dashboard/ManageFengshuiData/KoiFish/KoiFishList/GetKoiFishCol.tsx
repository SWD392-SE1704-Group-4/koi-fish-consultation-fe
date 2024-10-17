// columns.ts
import { GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { requestUpdateKoiFish } from '../../../../../features/fengshui/fengshui.actions';
import { setDeleteKoiFishModalOpenAction, setKoiFishAction, setUpdateKoiFishModalOpenAction } from '../../../../../features/fengshui';

export const useColumns = () => {
    const dispatch = useDispatch();

    const handleDeleteClick = (id: string) => {
        console.log(`Delete koi fish with ID: ${id}`);
        // Thêm logic xóa ở đây
    };

    const columns: GridColDef<(any)[number]>[] = [
        { field: 'koiFishName', headerName: 'Koi Fish Name', width: 150 },
        { field: 'koiFishColor', headerName: 'Color', width: 120 },
        { field: 'koiFishSize', headerName: 'Size (cm)', width: 120 },
        { field: 'koiFishAge', headerName: 'Age (years)', width: 120 },
        { field: 'symbolicMeaning', headerName: 'Symbolic Meaning', width: 150 },
        { field: 'favorableNumber', headerName: 'Favorable Number', width: 150 },
        { field: 'favorableColor', headerName: 'Favorable Color', width: 120 },
        { field: 'koiFishOrigin', headerName: 'Origin', width: 120 },
        { field: 'koiFishPrice', headerName: 'Price', width: 100 },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id, row }) => [
                <GridActionsCellItem
                    icon={<EditIcon />}
                    label="Edit"
                    className="textPrimary"
                    onClick={() => {
                        dispatch(setKoiFishAction(row));
                        dispatch(setUpdateKoiFishModalOpenAction(true));        
                    }}
                    color="inherit"
                />,
                <GridActionsCellItem
                    icon={<DeleteIcon />}
                    label="Delete"
                    onClick={() =>{
                        console.log('delete')
                        dispatch(setKoiFishAction(row));
                        dispatch(setDeleteKoiFishModalOpenAction(true));
                    }}
                    color="inherit"
                />,
            ],
        },
    ];

    return columns;
};
