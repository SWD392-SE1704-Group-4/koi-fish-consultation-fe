
declare module 'AppModels' {
    export type Advertisement = {
        advertisementId: string;
        title: string;
        description: string;
        location: string;
        contactInfo: string;
        phone: string;
        address: string;
        advertisementType: AdvertisementType;
        viewsCount: number;
        status: string;
        verified: boolean;
        expirationDate: string; 
        koiFish: KoiFish;
        fishPond: FishPond;
        postedBy: any;
        additionalImages: string[];
        tags: string[];
        createdAt: string;
        updatedAt: string;
    };
    interface Payment {
        id: string; 
        user: any; 
        note: string; 
        orderCode: number; 
        amount: number; 
        currency: string; 
        checkoutUrl: string; 
        paymentLinkId: string;
        createdAt: string; 
        updatedAt: string; 
        isDeleted: boolean; 
    }
    export type AdvertisementType = {
        id: string;
        typeName: string;
        description: string;
    }
    export type AdvertisementPackage = {
        packageId: string;
        packageName: string;
        description: string;
        price: number;
        durationInDays: number;
        maxAds: number;
        active: boolean;
    };
    
    export type TAdvertisementState = {
        isFetching: boolean;
        isPosting: boolean,
        postingSuccessModalOpen: boolean,
        paymentSuccessModalOpen: boolean,
        updateAdvertisementModalOpen: false,
        deleteAdvertisementModalOpen: false,
        advertisementList: Advertisement[],
        advertisementPackageList: AdvertisementPackage[],
        advertisementTypeList: AdvertisementType[],
        advertisementType: AdvertisementType,
        advertisement: Advertisement,
        advertisementDetailModalOpen: boolean,
        payment: Payment,
        status: string;
        error: string,
    }
}