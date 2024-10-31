import { RootState } from "../../redux/rootReducer";


export const selectCurrentDashboardTab = (state: RootState) => state.app.currentDashboardTab;