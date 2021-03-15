import React from 'react'
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import useStyles from './styles';
import courses from '../images/1.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
    const classes = useStyles();
    const user = null;

    return (
        <AppBar className={classes.appBar} position="static" color="inherent">
            <div className={classes.brandContainer}>
                <Typography component={ Link } to="/" className={classes.heading} variant="h2" align="center">Courses</Typography>
                <img className={classes.image} src={courses} alt="courses" height="60"/>
            </div>
            <Toolbar className={ classes.toolbar }>
                { user ? (
                    <div className={ classes.profile } >
                        <Avatar className={ classes.purple } alt={ user.result.name } src={ user.result.imageUrl }>{ user.name.charAt(0) }</Avatar>
                        <Typography className={classes.userName} varliant="h6" >{ user.result.name }</Typography>
                        <Button variant="contained" className={ classes.logout } color="secondary"> logout </Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                ) }
            </Toolbar>
    </AppBar>
    )
}

export default NavBar;
