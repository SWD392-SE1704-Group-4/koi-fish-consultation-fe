import { Box, Typography } from "@mui/joy";
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import { useEffect, useState } from "react";
import  {useAdvertisementColumns} from "./GetAdvertisementCol"
import { useSelector, useDispatch } from 'react-redux';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import BaseTable from "../../../../components/organism/BaseTable";
import { selectAdvertisementList } from "../../../../features/advertisement/advertisement.selectors";
import { setAdvertisementErrorAction, setAdvertisementListAction } from "../../../../features/advertisement";
import { requestGetListAdvertisement, requestGetListAdvertisementByStaff } from "../../../../features/advertisement/advertisement.actions";
import AdsDetailModal from "./AdsDetailModal";

const AdvertisementList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const columns = useAdvertisementColumns();
    const advertisementList = useSelector(selectAdvertisementList);
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
        dispatch(requestGetListAdvertisementByStaff({ request }));
    }, []);
    return (
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            <AdsDetailModal/>
            {(advertisementList) && <BaseTable rowId={(r: any) => r.advertisementId} rows={advertisementList} columns={columns} variant={variant} />}
        </Box>
    );
}

export default AdvertisementList;