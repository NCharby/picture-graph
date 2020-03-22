//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import type { $ImageResult } from 'Demo.Results'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1)
    },
    action: {
        margin: theme.spacing(0, 1)
    },
    media: {
        height: props => props.previewHeight,
    },
}));

type Props = $ImageResult

export default function ImageCard(props: Props) {
    const { 
        id, 
        previewURL, 
        previewWidth, 
        previewHeight, 
        largeImageURL, 
        favorites, 
        likes, 
        user, 
        tags 
        } = props

    const classes = useStyles(props)

    return (
        <Card
            className={classes.root}
            >
            <CardActionArea
                className={classes.action}
                >
                <CardMedia
                    image={previewURL}
                    className={classes.media}
                    />
                <CardContent>
                    <span>{tags}</span>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}