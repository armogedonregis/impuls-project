export type swiperPostData = {
    id: number;
    title: string;
    description?: string;
    url: string;
    image: string;
    author: string;
    publicationDate: string;
}
export interface categoryData {
    id: number;
    name: string;
    url: string;
    image: string;
    count: number;
}
export interface categorizedPosts {
    [key: string]: postType[]
}
export type postsType = {
    sliderPosts: swiperPostData[];
    categorizedPosts: categorizedPosts;
}
export type postType = {
    id: number;
    title: string;
    description: string;
    url: string;
    author: string;
    imageSmall: string;
    videoUrl: string;
    publicationDate: string;
    categories: categoryData[];
    isPrime: boolean;
}
export type foundPostType = {
    id: number;
    title: string;
    description: string;
    url: string;
    imageSmall: string;
}
export type instaImg = {
    id: string;
    media_type: string;
    media_url: string;
}
export type postsByCategory = {
    category: categoryData,
    posts: {
        content: postType[],
        totalPages: number,
        totalElements: number,
        message: string
    }
}
export type topPostType = {
    id: number;
    title: string;
    url: string;
    imageSmall: string;
}