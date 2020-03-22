//@flow
import React from 'react'
import _ from 'lodash'
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './imageCard.component'

import { getBreakpoint, BREAKPOINTS } from '../modules/index'
import { split } from '../modules/index'

import type { $ImageResult } from 'Demo.Results'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: 10,
        
        
    },
    col: {
        flex: colNumber => {
            const p = 100 / (colNumber + 1)
            return `${p}%` 
        },
        maxWidth: colNumber => {
            const p = 100 / (colNumber + 1)
            return `${p}%` 
        },
        alignItems: 'center'
    }
});


type Props = {
    results: Array<$ImageResult>
}

function createCol(col){
    return _.map(col, c => (
        <ImageCard
                key={`image-card-${c.id}`}
                id={`image-card-${c.id}`}
                //$FlowFixMe 
                {...c}
            />
    ))
}

export default function ImageGrid(props:Props){
    const { results } = props
    const currentBP = getBreakpoint()
    //TODO: if this breaks, you'll get -1
    const colNumber = _.indexOf(BREAKPOINTS, currentBP)
    const classes = useStyles(colNumber)
    //BREAKPOINTS is 0 based
    const splitCols = split(results, colNumber + 1)

    return (
        <div className={classes.wrapper}>
            {splitCols.map((col, i) => (
                    <div
                        className={classes.col}
                        id={`image-col-${i}`}
                        key={`image-col-${i}`}
                        >
                        {createCol(col)}
                    </div>  
                )
            )}

        </div>
    )

}