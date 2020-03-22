//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

type Props = {
    id: number,
    previewURL: string,
    previewWidth: number,
    previewHeight: string,
    largeImageURL: string,
    favorites: number,
    likes: number,
    user: string,
    tags: string
}

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

    const classes = useStyles()

    return (
        <Card>
            <CardActionArea
                className={classes.root}
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