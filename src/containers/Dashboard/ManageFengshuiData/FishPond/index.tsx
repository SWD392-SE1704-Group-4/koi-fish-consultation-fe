import { Box } from "@mui/joy";
import FishPondManageList from "./FishPondList";
import BaseTable from "../../../../components/organism/BaseTable";

const FishPond: React.FC = (): JSX.Element => {
    return (
        <Box
            sx={{
                overflow: 'hidden',
            }}
        >
            <FishPondManageList/>
        </Box>
    );
}

export default FishPond;