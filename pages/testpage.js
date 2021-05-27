import { useState } from 'react';


//style

import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


const StyledButton = withStyles({
    root: {
        background: 'linear-gradient(45deg, #1565c0 30%, #5e92f3 90%)',
        borderRadius: 20,
        color: 'red',
        height: 60,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#bbdefb',
        height: 65
    },
});

const styleObj = {
    fontSize: 14,
    color: "#4a54f1",
    textAlign: "center",
    paddingTop: "0",
}



export default function NavBar() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };




    return (
        <Paper style={styleObj}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="secondary"
                    className={classes.root}
                    centered >
                    <Tab label="Hotel" />
                    <Tab label="Restaurant" />
                    <Tab label="Cafe" />
                    <StyledButton>
                        <Tab label="Jobs" />
                    </StyledButton>
                    <Tab label="About us" />
                    <Tab label="Contact" />
                    <Tab label="Login" />
                </Tabs>
            </Paper>
    );
}