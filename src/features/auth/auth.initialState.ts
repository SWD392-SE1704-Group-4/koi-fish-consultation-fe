import { TAppState, TAuthState } from "AppModels"

const authInitialState: TAuthState = {
    auth: {
        signUpStatus: null,
        updateUserStatus: null,
        isPrepared: false,
        isLoggedIn: false,
        newPasswordRequired: false,
        resetPassword: false,
        new_password: false,
        reset: false,
        isLoaded: null,
        error: null,
    },
    user: {
        sub: null,
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        address: '',
        birthday: '',
        gender: '',
        phone: '',
        picture: '',
        role: '',
        emailVerified: null
    },
    userPackageInfo: {
        currentPackage: null,
        remainingAds: null,
        packageExpiryDate: null,
    },
    personalFengshui: {
        earthlyBranch: null,
        element: null,
        fishRecommendation: null,
        heavenlyStem: null,
        tankDirection: null,
    }
}

export default authInitialState;