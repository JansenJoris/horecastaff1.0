
import React from 'react';
import Hamburger from './hamburger';

import { alpha, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import {
    Link,
    AppBar,
    Toolbar,
    Typography,
    InputBase
} from '@material-ui/core';

const logo = '/images/logohorecastaff.png'


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('xs')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'white',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    barColor:
    {
        backgroundColor: '#B89E97'
    }
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <Typography className={classes.title} variant="h6" noWrap>
                <AppBar position="static" className={classes.barColor} >
                    <Toolbar>
                        <Hamburger />
                        <Link href='/'
                            passhref={true}
                            color='inherit'
                            underline='none'>
                            <img src={logo} alt='horecastaff logo' />
                        </Link>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="JOBS"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'JOBS' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div>
                            <Link href='/profile/login' passHref={true} color='inherit'>
                                <AccountCircle />
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>
            </Typography>
        </div>
    );
}
