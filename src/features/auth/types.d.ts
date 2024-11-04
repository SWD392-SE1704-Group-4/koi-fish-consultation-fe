
declare module 'AppModels' {
    export type TAuthState = {
        auth: {
            signUpStatus: string,
            updateUserStatus: string,
            isPrepared: boolean,
            isLoggedIn: boolean,
            newPasswordRequired: boolean,
            resetPassword: boolean,
            new_password: boolean,
            reset: boolean,
            isLoaded: boolean,
            error: string,
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
            emailVerified: boolean,
            role: string,
        },
        userPackageInfo: {
            currentPackage: AdvertisementPackage,
            remainingAds: number,
            packageExpiryDate: Date,
        },
        personalFengshui: {
            earthlyBranch: string;
            element: string;
            fishRecommendation: string;
            heavenlyStem: string;
            tankDirection: string;
        }
    }
}
