//@flow
import { gql } from "apollo-boost";

//NOTE: $page starts at 1
export const GET_DEFAULT_RESULTS = gql`
    query Search($page: Int!){
        search(page: $page, per_page: 40, order: latest, editors_choice:true) {
            id,
            type,
            tags,
            previewURL,
            previewWidth,
            previewHeight,
            largeImageURL,
            favorites,
            likes,
            user,
            userImageURL
        }
    }
`

export const GET_SEARCH_RESUTLS = gql`
    query Search($per_page: Int, $cat: String, $color: String, $q: String) {
        search(order: popular, per_page: $per_page, color: $color, q: $q) {
            id,
            type,
            tags,
            previewURL,
            previewWidth,
            previewHeight,
            largeImageURL,
            favorites,
            likes,
            user,
            userImageURL
        }
    }
`