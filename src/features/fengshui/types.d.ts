
declare module 'AppModels' {
    export type FengshuiElement = {
        elementId: string;
        elementName: string;
        elementColor: string;
        elementDirection: string;
        elementSeason: string;
        elementYinYang: string;
        elementAssociatedAnimals: string[];
        elementStrength: string;
    };

    export type KoiFish = {
        id: string;
        koiFishName: string;
        koiFishColor: string;
        koiFishSize: number;
        koiFishAge: number;
        koiFishPictures: string[]; 
        fengshuiElement: FengshuiElement;
        symbolicMeaning: string;
        energyType: string;
        favorableNumber: number;
        favorableColor: string;
        koiFishOrigin: string;
        koiFishDescription: string;
        koiFishPrice: number;
    };

    export type TFengshuiState = {
        isFetching: boolean;
        fengshuiElementList: FengshuiElement[],
        koiFish: KoiFish,
        updateKoiFishModalOpen: false,
        createKoiFishModalOpen: false,
        deleteKoiFishModalOpen: false,
        koifishList: [],
        fishpondList: [],
        status: string;
        error: string,
    }
}