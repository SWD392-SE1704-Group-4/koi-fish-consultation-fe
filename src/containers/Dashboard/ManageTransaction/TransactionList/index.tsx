import { Box, Typography } from "@mui/joy";
import { VariantProp, ColorPaletteProp } from '@mui/joy/styles';
import { useEffect, useState } from "react";
import  {useTransactionColumns} from "./GetTransactionCol"
import { useSelector, useDispatch } from 'react-redux';

import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import BaseTable from "../../../../components/organism/BaseTable";
import { selectAdvertisementList, selectPaymentList } from "../../../../features/advertisement/advertisement.selectors";
import { setAdvertisementErrorAction, setAdvertisementListAction } from "../../../../features/advertisement";
import { requestGetListAdvertisement, requestGetListAdvertisementByStaff, requestGetPayment } from "../../../../features/advertisement/advertisement.actions";

const TransactionList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const columns = useTransactionColumns();
    const paymentList = useSelector(selectPaymentList);
    const [variant, setVariant] = useState<VariantProp>('plain');
    const request = {
       
    }
    useEffect(() => {
        dispatch(requestGetPayment({ request }));
    }, []);
    return (
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            {(paymentList) && <BaseTable rowId={(r: any) => r.id} rows={paymentList} columns={columns} variant={variant} />}
        </Box>
    );
}

export default TransactionList;