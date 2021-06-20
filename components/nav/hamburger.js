import React from 'react';

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
        width: '20vw',
        marginTop: '10%',
        background: '#90caf9'
    },
    styles: {
        height: '100%',
        width: '100%',
        backgroundColor: '#90caf9'
    },
    list: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: '25%',
        marginRight: '25%'
    }
});

export default function Hamburger() {
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
                <List>
                    {['Sollicitant', 'Werkgever'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    <h4>JOBS</h4>
                    {['Hotel', 'Resto', 'Cafe', 'Flexi-Jobs'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['News', 'Contact', 'Partners'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Typography>
        </div>
    );

    return (
        <div>
            {[''].map((anchor) => (
                <React.Fragment>
                    <Button onClick={toggleDrawer(anchor, true)} style={{ backgroundColor: '#90caf9' }}>
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
