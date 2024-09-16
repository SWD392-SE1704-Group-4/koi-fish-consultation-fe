// import { ThemeProvider } from "@emotion/react";

import { Box } from "@mui/joy";
import BoardLayout from "../../components/organism/BoardLayout";

const Dashboard: React.FC = (): JSX.Element =>{
    

    return (
        <Box sx={{
            height: "100vh",
            padding: 2
        }}>
            <BoardLayout></BoardLayout>
        </Box>
    );
}

export default Dashboard;