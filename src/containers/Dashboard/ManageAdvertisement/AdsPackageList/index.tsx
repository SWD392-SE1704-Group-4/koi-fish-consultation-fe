import { Box, Typography } from "@mui/joy";
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import { useEffect, useState } from "react";
import  { useAdsPackageColumns } from './GetAdsPackageCol';
import { useSelector, useDispatch } from 'react-redux';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import BaseTable from "../../../../components/organism/BaseTable";
import { selectAdvertisementList } from "../../../../features/advertisement/advertisement.selectors";
import { setAdvertisementErrorAction, setAdvertisementListAction } from "../../../../features/advertisement";
import { requestGetListAdvertisement } from "../../../../features/advertisement/advertisement.actions";

const AdsPackageList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const columns = useAdsPackageColumns();
    const advertisementList = [];
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
        dispatch(requestGetListAdvertisement({ request }));
    }, []); 

    return (
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            {(advertisementList) && <BaseTable rowId={(r: any) => r.advertisementId} rows={advertisementList} columns={columns} variant={variant} />}
        </Box>
    );
}

export default AdsPackageList;