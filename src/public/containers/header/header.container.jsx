//@flow
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { SearchBox } from '../../components/index';
import FilterDrawer from './filterDrawer.container'

import { CATEGORIES, COLORS } from '../../constants/index' 

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    searchWrapper: {
        flexGrow: 1
    },
    toolbar: {
        flexDirection: 'column'
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: 20,
        },
    },
    subtext: {
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginBottom: 10
    },  
    titleWrapper: {
        display: 'flex',
        flexDirection: 'row nowrap',
        padding: 10,
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    filtersWrapper: {
        maxWidth: '100%',
        paddingBottom: theme.spacing(2)
    },
    actionsWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'flex-end',
        paddingBottom: theme.spacing(2)
    },
    contrastBtn: {
        color: '#fff',
        borderColor: '#fff',
        marginRight: theme.spacing(2)
    }

}))

export default function Header() {
    const classes = useStyles();

    const [selectedCats: Array<string>, setSelectedCats] = React.useState([])
    const [selectedColors: Array<string>, setSelectedColors] = React.useState([])

    const onChangeCats = (evt, newSelected) => {
        setSelectedCats(newSelected)
    }

    const onChangeColors = (evt, newSelected) => {
        setSelectedColors(newSelected)
    }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.titleWrapper}>
                        <Typography variant="h4" className={classes.title}>
                            PixaViewer
                        </Typography>
                        <div className={classes.searchWrapper}>
                            <SearchBox />
                        </div>
                    </div>
                    <Typography variant="h6" className={classes.subtext}>
                        Filter
                    </Typography>
                    <div className={classes.filtersWrapper}>
                        <FilterDrawer
                            onChangeItems={onChangeCats}
                            displayText={"Categories"}
                            items={CATEGORIES}
                            //$FlowFixMe - shutup flow, it is a string array
                            selectedItems={selectedCats}
                            />
                        <FilterDrawer
                            onChangeItems={onChangeColors}
                            displayText={"Colors"}
                            items={COLORS}
                            //$FlowFixMe - shutup flow, it is a string array
                            selectedItems={selectedColors}
                            />
                    </div>
                    <div className={classes.actionsWrapper}>
                        <Button
                            className={classes.contrastBtn}
                            variant="outlined"
                            >
                            My Favorites
                        </Button>
                        <Button
                            variant="contained"
                            >
                            Search
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}