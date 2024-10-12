import { Box, Typography } from "@mui/joy";
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import BaseTable from "../../../../../components/organism/BaseTable";
import { GetFengshuiElement } from "../../../../../services/FengshuiElement";
import { useEffect, useState } from "react";
import columns from "./GetElementCol";
import { useSelector, useDispatch } from 'react-redux';
import { selectFenghsuiElementList, selectIsFetching } from '../../../../../features/fengshui/fengshui.selectors';
import { requestGetFengshuiElement } from "../../../../../features/fengshui/fengshui.actions";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const FengshuiElementList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    const fengshuiElement = useSelector(selectFenghsuiElementList);
    const [variant, setVariant] = useState<VariantProp>('plain');
    const request = {
        keyword: "",
        categoryIds: [

        ],
        pagingOption: {
            pageIndex: 0,
            pageTotal: 50
        },
        sortOption: {
            field: "name",
            direction: "DESC"
        }
    }
    useEffect(() => {
        dispatch(requestGetFengshuiElement({ request }));
    }, []);
    return (
        <Box sx={{ overflow: "hidden", width: "100%"}}>
        {(!isFetching && fengshuiElement) && <BaseTable rowId={(r: any) => r.elementId} rows={fengshuiElement} columns={columns} variant={variant} />}
        </Box>
    );
}

export default FengshuiElementList;
