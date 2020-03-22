//@flow
import React from 'react'
import ImageCard from './imageCard.component'

import type { $ImageResult } from 'Demo.Results'

type Props = {
    results: Array<$ImageResult>
}

export default function ImageGrid(props:Props){
    const { results } = props
    return (
        <div>
            {results.map(v => 
                <ImageCard
                    key={`image-card-${v.id}`}
                    id={`image-card-${v.id}`}
                    {...v}
                />
            )}

        </div>
    )

}