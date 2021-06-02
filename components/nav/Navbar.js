
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import FacebookIcon from '@material-ui/icons/Facebook';

import {
    Link,
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Typography,
    InputBase
} from '@material-ui/core'

import Hamburger from './hamburger';



const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
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
        color: 'pink',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.grow}>
            <Typography className={classes.title} variant="h6" noWrap>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <Hamburger />
                        </IconButton>
                        <Link href='/'
                            passhref={true}
                            color='inherit'
                            underline='none'>
                            Ho.re.ca.staff
                        </Link>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Jobs"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'Jobs' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Link href='/hotel' passHref={true} color='inherit'>
                                <AccountCircle />
                            </Link>
                        </div>
                        <div className={classes.sectionMobile}>
                            <Button color="inherit">
                                <FacebookIcon />
                                <MoreIcon />
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Typography>
        </div>
    );
}
