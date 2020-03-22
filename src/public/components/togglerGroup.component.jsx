//@flow
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
//TODO: Labs components are unstable. Impliment these
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        overflow: 'scroll',
        maxWidth: '100%'
    },
    grouped: {

    }
}))



function buildButtons(items, setActive, selectedItems) {
    const classes = useStyles();
    const els = items.map( (item, i) => 
        <ToggleButton
                
                id={`toggler-item-${i}-${item}`}
                key={`toggler-item-${i}-${item}`}
                value={item}
                onChange={setActive}
            >
            {item}
        </ToggleButton>
    )
    return (
        <ToggleButtonGroup
            classes={{
                root: classes.root
            }}
            size={'medium'}
            value={selectedItems}
            onChange={setActive}
            >
            {els}
        </ToggleButtonGroup>
    )
}

type Props = {
    onChangeItems: (Array<string>) => void,
    selectedItems: Array<string>,
    items: Array<string>,
    style: {[string]: string}
}

export default function TogglerGroup(props: Props){
    const { items, onChangeItems, selectedItems, style } = props
    return (
        <div style={style}>
            {buildButtons(items, onChangeItems, selectedItems)}
        </div>
    )

}