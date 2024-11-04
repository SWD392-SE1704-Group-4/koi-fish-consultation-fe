declare module "AppModels" {
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

    interface FengshuiDirection {
        directionId: string;
        directionName: string;
        description: string;
        elementAssociation: string;
        yinYangBalance: string;
        favorableAttributes: string;
        unfavorableAttributes: string;
        secondaryDirection: string | null;
        fengshuiTips: string;
        associatedColor: string;
        associatedShape: string;
        fengshuiElement: FengshuiElement;
    }
    
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

    export type FishPond = {
        pondId: string;
        pondName: string;
        pondShape: string;
        pondSize: number;
        pondDepth: number;
        pondMaterial: string;
        hasWaterfall: boolean;
        hasPlants: boolean;
        hasRocks: boolean;
        isSaltwater: boolean;
        numKoiFish: number;
        waterCapacity: number;
        pondElement: string | null;
        pondLocation: string;
        pondOrientation: any;
        pondPictures: string[]
    };
    
    export type TFengshuiState = {
        isFetching: boolean;
        fengshuiElementList: FengshuiElement[],
        koiFish: KoiFish,
        fishPond: FishPond,
        updateKoiFishModalOpen: false,
        createKoiFishModalOpen: false,
        deleteKoiFishModalOpen: false,
        koifishList: [],
        fishPondList: FishPond[],
        fishPondDetailModalOpen: boolean,
        createKoiPondModalOpen: boolean,
        fengshuiDirectionList: FengshuiDirection[],
        status: string;
        error: string,
        heavenEarth: null,
        AICalculationModalOpen: boolean,
        AIconsultation: any,
        targetCompareData: any                                                                             
    }
}

