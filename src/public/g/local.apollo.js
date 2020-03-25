//@flow
import { gql } from "apollo-boost";

export const Q_CATS = gql`
    {
        queryCats @client
    }
`

export const Q_COLORS = gql`
    {
        queryColors @client
    }
`

