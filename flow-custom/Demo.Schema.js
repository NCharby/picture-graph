//@flow

declare module 'Demo.Schema' {

    declare type APICategrories = 
        | "backgrounds"
        | "fashion"
        | "nature"
        | "science"
        | "education"
        | "feelings"
        | "health"
        | "people"
        | "religion"
        | "places"
        | "animals"
        | "industry"
        | "computer"
        | "food"
        | "sports"
        | "transportation"
        | "travel"
        | "buildings"
        | "business"
        | "music"

    declare type APIColors = 
        | "grayscale"
        | "transparent"
        | "red"
        | "orange"
        | "yellow"
        | "green"
        | "turquoise"
        | "blue"
        | "lilac"
        | "pink"
        | "white"
        | "gray"
        | "black"
        | "brown"

    declare type APIOrder = 
        | "popular"
        | "latest"

    declare type $APISearchQuery = {
        page?: number,
        per_page?: number,
        editors_choice?: boolean,
        cat: APICategrories,
        color: APIColors,
        q: string,
        order: APIOrder

    }

}