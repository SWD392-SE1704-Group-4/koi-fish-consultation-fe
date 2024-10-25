
declare module 'AppModels' {
    export type Advertisement = {
        advertisementId: string;
        title: string;
        description: string;
        location: string;
        contactInfo: string;
        advertisementType: AdvertisementType;
        quantity: number;
        viewsCount: number;
        status: string;
        adminVerified: boolean;
        expirationDate: string; 
        koiFish: KoiFish;
        koiFishId: string;
        userInfo: any;
        postedBy: string;
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

    export type TAdvertisementState = {
        isFetching: boolean;
        updateAdvertisementModalOpen: false,
        deleteAdvertisementModalOpen: false,
        advertisementList: Advertisement[],
        advertisementTypeList: AdvertisementType[],
        advertisementType: AdvertisementType,
        advertisement: Advertisement,
        advertisementDetailModalOpen: boolean,
        status: string;
        error: string,
    }
}