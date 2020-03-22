//@flow
import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { ImageGrid } from '../../components/index'

import { Q } from '../../g/index'

// type Props = {

// }

export default function Results() {
    // const [curPage, setCurPage] = React.useState(1)

    const { loading, error, data } = useQuery(Q.GET_DEFAULT_RESULTS, {
        variables: {page: 1}
    });

    if(error) {
        console.error(error)
        return (
            <div>
                <h1>It Broke ¯\_(ツ)_/¯</h1>
            </div>
        )
    }

    if(loading){
        return (
            <div>
                loading
            </div>
        )
    }
    
    return (
        <div>
            <ImageGrid results={data.search} />
        </div>
    )
}