import { Box } from "@mui/joy";
import { VariantProp } from '@mui/joy/styles';
import BaseTable from "../../../../../components/organism/BaseTable";
import { useEffect, useState } from "react";
import columns from "./GetKoiFishCol";
import { useSelector, useDispatch } from 'react-redux';
import { selectKoiFishList, selectIsFetching } from '../../../../../features/fengshui/fengshui.selectors';
import { requestGetKoiFish } from "../../../../../features/fengshui/fengshui.actions";

const KoiFishManageList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectIsFetching);
    const koiFishList = useSelector(selectKoiFishList);
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
        dispatch(requestGetKoiFish({ request }));
    }, []);
    
    return (
        <Box sx={{ overflow: "hidden", width: "100%"}}>
        {(!isFetching && koiFishList) && <BaseTable rowId={(r: any) => r.id} rows={koiFishList} columns={columns} variant={variant} />}
        </Box>
    );
}

export default KoiFishManageList;
