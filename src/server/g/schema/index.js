import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Image {
        id: Int!
        pageURL: String!
        type: String!
        tags: String
        previewURL: String!
        previewWidth: Int!
        previewHeight: Int!
        largeImageURL: String!
        favorites: Int!
        likes: Int!
        user: String
    }

    enum Colors {
        grayscale 
        transparent 
        red 
        orange 
        yellow 
        green 
        turquoise 
        blue 
        lilac 
        pink 
        white 
        gray 
        black 
        brown
    }

    enum Categories {
        backgrounds
        fashion
        nature
        science
        education
        feelings
        health
        people
        religion
        places
        animals
        industry
        computer
        food
        sports
        transportation
        travel
        buildings
        business
        music
    }

    enum Order {
        popular
        latest
    }


    type Query {
        image(id: Int!): Image
        search(
            page: Int, 
            per_page: Int, 
            editors_choice: Boolean, 
            cat: Categories, 
            color: Colors,
            q: String,
            order: Order
        ): [Image]
    }




`