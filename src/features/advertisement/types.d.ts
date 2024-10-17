
declare module 'AppModels' {
    export type Advertisement = {
        advertisementId: string;
        title: string;
        description: string;
        location: string;
        contactInfo: string;
        advertisementType: string;
        quantity: number;
        viewsCount: number;
        status: string;
        adminVerified: boolean;
        expirationDate: string; 
        koiFishId: string;
        postedBy: string;
        additionalImages: string[];
        tags: string[];
        createdAt: string;
        updatedAt: string;
    };


    export type TAdvertisementState = {
        isFetching: boolean;
        updateAdvertisementModalOpen: false,
        deleteAdvertisementModalOpen: false,
        advertisementList: Advertisement[],
        status: string;
        error: string,
    }
}