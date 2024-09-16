
declare module 'AppModels'{
    export type TAppState = {
        
    }
    export type TAppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
}