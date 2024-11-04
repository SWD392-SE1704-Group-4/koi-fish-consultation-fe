
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
        updateAdvertisementModalOpen: false,
        deleteAdvertisementModalOpen: false,
        advertisementList: Advertisement[],
        advertisementPackageList: AdvertisementPackage[],
        advertisementTypeList: AdvertisementType[],
        advertisementType: AdvertisementType,
        advertisement: Advertisement,
        advertisementDetailModalOpen: boolean,
        status: string;
        error: string,
    }
}