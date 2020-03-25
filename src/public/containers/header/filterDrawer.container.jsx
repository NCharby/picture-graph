//@flow
import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import { TogglerGroup } from '../../components/index'

type Props = {
    displayText: string,
    onChangeItems: (Array<string>) => void,
    selectedItems: Array<string>,
    items: Array<string>
}

export default function FilterDrawer(props: Props){
    const { displayText, onChangeItems, selectedItems, items } = props
    return (
        <ExpansionPanel style={{maxWidth: '100%'}}>
            <ExpansionPanelSummary
                expandIcon={<Icon>keyboard_arrow_down</Icon>}
                id={`filter-drawer-${displayText}`}
                >
                <Typography>{displayText}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{maxWidth: '100%'}}>
                <TogglerGroup
                    style={{maxWidth: '100%'}}
                    items={items}
                    onChangeItems={onChangeItems}
                    selectedItems={selectedItems}
                    />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}