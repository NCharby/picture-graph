//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'flex-start'
    },
    item: {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));


type Props = {
    tags: string,
    id: number
}

export default function TagList(props: Props) {
    const { tags, id } = props
    const classes = useStyles()
    const tagList = tags.split(', ')
    return (
        <div className={classes.wrapper}>
            {tagList.map(t => (
                <Chip 
                    className={classes.item}
                    key={`tag-${id}-${t}`}
                    label={t}
                    />
            ))}
        </div>
    )

}