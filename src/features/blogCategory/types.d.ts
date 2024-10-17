declare module "AppModels" {
  export type BlogPost = {
    blogId: string;
    cognitoUserId: string;
    blogName: string;
    blogTitle: string;
    blogContent: string;
    blogCategory: string;
    blogAuthor: string;
  };
  export type TBlogState = {
    isFetching: boolean;
    blogPostList: BlogPost[];
    blogCategories: string[];
  };
}
