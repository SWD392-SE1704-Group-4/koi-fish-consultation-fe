import React from "react";
import { Box, Button } from "@mui/joy";
import BaseTable from "../../../../../components/organism/BaseTable";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import {useFishPondColumns} from './GetFishPondList';
import { selectFishPondList, selectIsFetching } from "../../../../../features/fengshui/fengshui.selectors";
import { requestGetFishPondList } from "../../../../../features/fengshui/fengshui.actions";
import FishPondDetailModal from "./FishPondDetailModal";

const FishPondManageList: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const columns = useFishPondColumns();
    const isFetching = useSelector(selectIsFetching);
    const fishPondList = useSelector(selectFishPondList);
    const { enqueueSnackbar } = useSnackbar();

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
    
    React.useEffect(() => {
        dispatch(requestGetFishPondList({ request }));
    }, []);
    return (
        <Box
            sx={{
                overflow: 'hidden',
            }}
        > 
            {/* <Button sx={{
                mt: 2,
                mb: 2,
                borderRadius: 0,
                backgroundColor: "#ed2d4d"
            }}
                // onClick={() => { dispatch(setCreateKoiFishModalOpenAction(true))}}
            >
                Add
            </Button> */}
            <FishPondDetailModal/>
            {(!isFetching && fishPondList) && <BaseTable rowId={(r: any) => r.pondId} rows={fishPondList} columns={columns} />}
        </Box>
    );
}

export default FishPondManageList;