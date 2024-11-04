// import { ThemeProvider } from "@emotion/react";

import { Box, Typography } from "@mui/joy";
import DashboardBoard from "../../../components/organism/BoardLayout";
import React from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { selectAdvertisement, selectAdvertisementInfo } from "../../../features/advertisement/advertisement.selectors";
import { setAdvertisementErrorAction, setAdvertisementStatusAction } from "../../../features/advertisement";
import TransactionList from "./TransactionList";

const ManageTransaction: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const advertisementInfo = useSelector(selectAdvertisementInfo);

    const handleItemsChange = (updatedItems) => {
        setItems(updatedItems);
    };

    React.useEffect(() => {
        if (advertisementInfo.error) {
            enqueueSnackbar({ message: advertisementInfo.error, variant: "error", autoHideDuration: 2000 })
        }
        dispatch(setAdvertisementErrorAction(null))
    }, [advertisementInfo.error]);

    React.useEffect(() => {
        if (advertisementInfo.status) {
            enqueueSnackbar({ message: advertisementInfo.status, variant: "success", autoHideDuration: 2000 })
        }
        dispatch(setAdvertisementStatusAction(null))
    }, [advertisementInfo.status]);

    const [items, setItems] = React.useState([
        {
            id: "1",
            rowSpan: 5,
            columnSpan: 5,
            data: { title: "Transaction list", content: <TransactionList /> }
        },
    
    ]);
    return (
        <DashboardBoard items={items} onItemsChange={handleItemsChange} />
    );
}

export default ManageTransaction;
