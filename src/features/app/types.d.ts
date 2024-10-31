
declare module 'AppModels' {
    export type TAppState = {
        onlineStatus: boolean,
        currentTabIndex: number,
        currentDashboardTab: any
    }
    export type TAppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
}