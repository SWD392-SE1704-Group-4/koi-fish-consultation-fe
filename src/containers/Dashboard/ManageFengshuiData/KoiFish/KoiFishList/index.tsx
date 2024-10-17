import { Box, Button } from "@mui/joy";
import { VariantProp } from '@mui/joy/styles';
import BaseTable from "../../../../../components/organism/BaseTable";
import { useEffect, useState } from "react";
import { useColumns } from "./GetKoiFishCol";
import { useSelector, useDispatch } from 'react-redux';
import { selectKoiFishList, selectIsFetching, selectFengshuiInfo } from '../../../../../features/fengshui/fengshui.selectors';
import { requestGetKoiFish } from "../../../../../features/fengshui/fengshui.actions";
import UpdateKoiFishModal from "../UpdateKoiFishModal";
import CreateKoiFishModal from "../CreateKoiFishModal";
import { setCreateKoiFishModalOpen } from "../../../../../features/fengshui/fengshui.reducers";
import { setCreateKoiFishModalOpenAction, setFengshuiErrorAction, setFengshuiStatusAction } from "../../../../../features/fengshui";
import React from "react";
import { useSnackbar } from "notistack";
import DeleteKoiFishModal from "../DeleteConfirmModal";

const KoiFishManageList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const columns = useColumns();
    const isFetching = useSelector(selectIsFetching);
    const koiFishList = useSelector(selectKoiFishList);
    const [variant, setVariant] = useState<VariantProp>('plain');
    const fengshuiInfo = useSelector(selectFengshuiInfo);
    const { enqueueSnackbar } = useSnackbar();

    React.useEffect(() => {
        if (fengshuiInfo.error) {
            enqueueSnackbar({ message: fengshuiInfo.error, variant: "error", autoHideDuration: 2000 })
        }
        dispatch(setFengshuiErrorAction(null))
    }, [fengshuiInfo.error]);

    React.useEffect(() => {
        if (fengshuiInfo.status) {
            enqueueSnackbar({ message: fengshuiInfo.status, variant: "success", autoHideDuration: 2000 })
        }
        dispatch(setFengshuiStatusAction(null))
    }, [fengshuiInfo.status]);

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
        <Box sx={{ overflow: "hidden", width: "100%" }}>
            <Button sx={{
                mt: 2,
                mb: 2,
                borderRadius: 0,
                backgroundColor: "#ed2d4d"
            }}
                onClick={() => { dispatch(setCreateKoiFishModalOpenAction(true))}}
            >
                Add
            </Button>
            <CreateKoiFishModal />
            <UpdateKoiFishModal />
            <DeleteKoiFishModal />
            {(!isFetching && koiFishList) && <BaseTable rowId={(r: any) => r.id} rows={koiFishList} columns={columns} variant={variant} />}
        </Box>
    );
}

export default KoiFishManageList;
