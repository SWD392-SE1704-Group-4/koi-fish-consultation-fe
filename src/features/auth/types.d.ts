
declare module 'AppModels' {
    export type TAuthState = {
        auth: {
            isPrepared: boolean,
            isLoggedIn: boolean,
            newPasswordRequired: boolean,
            resetPassword: boolean,
            new_password: boolean,
            reset: boolean,
            isFetching: boolean,
            error: boolean,
        },
        user: {
            sub: string,
            username: string,
            email: string,
            firstname: string,
            lastname: string,
            address: string,
            birthday: string,
            gender: string,
            phone: string,
            picture: string,
            role: string,
        }
    }
}