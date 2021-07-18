import React from 'react';
import Link from 'next/link'
//navBar
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';


//Hamburger icon
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles({
    fullList: {
        width: '25vw',
        marginTop: '10vh',
        background: '#1098f7'
    },
    styles: {
        height: '100%',
        width: '100%',
        backgroundColor: '#1098f7'
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '25%',
        marginRight: '25%'
    },
    dividerColor: {
        background: '#ffffff'
    }
});

 const Hamburger = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div className={classes.fullList}
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Typography align='center' gutterBottom>
                {/* <List>
                    {['Sollicitant', 'Werkgever'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List> */}
                <Divider className={classes.dividerColor} />
                <List>
                    <ListItem button >
                        <Link href='/vacatures/hotel'>
                            <p>Hotel</p>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <Link href='/vacatures/resto'>
                            <p>Resto</p>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link href='/vacatures/cafe'>
                            <p>Cafe</p>
                        </Link>
                    </ListItem>
                    <ListItem button >
                        <Link href='/vacatures/flexi-jobs'>
                            <p>Flexi</p>
                        </Link>
                    </ListItem>
                </List>
                <Divider className={classes.dividerColor} />
                <List>
                    {['News', 'Contact', 'Partners'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider className={classes.dividerColor} />
            </Typography>
        </div>
    );

    return (
        <div>
            {[''].map((anchor) => (
                <React.Fragment>
                    <Button onClick={toggleDrawer(anchor, true)} style={{ backgroundColor: '#1098f7' }}>
                        {anchor}
                        {/* Hamburger logo */}
                        <MenuIcon />
                    </Button>

                    <SwipeableDrawer
                        anchor={'left'}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        <div className={classes.styles}>
                            <div className={classes.list}>
                                {list(anchor)}
                            </div>
                        </div>
                    </SwipeableDrawer>

                </React.Fragment>
            ))}
        </div>
    );
}

export default Hamburger