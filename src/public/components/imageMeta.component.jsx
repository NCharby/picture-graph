//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon'

import type { $ImageResult } from 'Demo.Results'

const useStyles = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start',
        position: 'absolute',
        top: 5,
        left: 5,
        opacity: 0.8
    },
    item: {
        fontSize: 18,
        paddingRight: 5,
        color: '#fff'
    },
    icon: {
        fontSize: 16,
        padding: '0 5'
    }
}));


export default function ImageMeta(props: $ImageResult) {
    const {
        favorites, 
        likes } = props
    const classes = useStyles()
    

    return (
        <div className={classes.wrapper}>
            <span className={classes.item}>
                {favorites} 
                <Icon className={classes.icon}>favorite</Icon>
            </span>
            <span className={classes.item}>
                {likes} 
                <Icon className={classes.icon}>thumb_up</Icon>
            </span>
        </div>
    )

}