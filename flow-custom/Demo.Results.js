//@flow

declare module 'Demo.Results' {

    declare type $ImageResult = {
        id: number,
        previewURL: string,
        previewWidth: number,
        previewHeight: string,
        largeImageURL: string,
        favorites: number,
        likes: number,
        user: string,
        tags: string
    }
}