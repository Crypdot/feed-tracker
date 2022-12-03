import { Box } from "@mui/material";
import Header from "../../components/Header";
import CountdownTimer from "../../components/CountdownTimer";

const Dashboard = () => {
    return <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="This should display things such as reminders, a list/table of pets, and a little water-intake reminder!"/>
            </Box>
            <Box>
                <CountdownTimer target="December 3, 2022 15:59" message="Snake's water!"/>
                <CountdownTimer target="December 3, 2022 16:01" message="Snake's Next feeding!"/>
            </Box>
        </Box>
}

export default Dashboard;