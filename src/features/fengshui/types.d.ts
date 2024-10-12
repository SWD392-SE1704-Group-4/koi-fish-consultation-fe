
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
    export type TFengshuiState = {
        isFetching: boolean;
        fengshuiElementList: FengshuiElement[],
        koifishList: [],
        fishpondList: []
    }
}