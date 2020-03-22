//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import TagList from './tags.component'
import ImageMeta from './imageMeta.component'

import type { $ImageResult } from 'Demo.Results'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: theme.spacing(1)
    },
    action: {
        
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
                <ImageMeta
                        {...props}
                    />
                <CardMedia
                    image={previewURL}
                    className={classes.media}
                    />
                <CardContent>
                    
                    <TagList
                        id={id}
                        tags={tags}
                    />
                </CardContent>
            </CardActionArea>
        </Card>
    )
}