
declare module "AppModels"{
    
    export type GetComicRequestBody = {
        keyword: string,
        categoryIds: string[],
        pagingOption: PagingOption,
        sortOption: SortOption
    }

    export type Comic = {
        id: string;
        name: string;
        type: string;
        status: string;
        posterPath: string;
        author: string[];
        content: string;
        slug: string;
        categories: Category[];
        chapters: Chapter[];
        createdAt: Date;
        updatedAt: Date;
    }
    
    export type Category = {
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }
    
    export type Chapter = {
        id: string;
        fileName: string;
        chapterName: string;
        chapterTitle: string;
        chapterApiData: string;
        createdAt: Date;
        updatedAt: Date;
    };
    
    export interface ComicResponse {
        data: Comic[];
        total: number;        
        page: number;         
        limit: number;        
    }    
}

