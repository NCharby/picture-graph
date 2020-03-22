//@flow
import { gql } from "apollo-boost";

import type { $APISearchQuery } from 'Demo.Schema'

export const GET_DEFAULT_RESULTS = gql`
    {
        search(per_page: 25, order: latest, editors_choice:true) {
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