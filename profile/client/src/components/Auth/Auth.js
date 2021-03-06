import React, { useState } from 'react'
import { Avatar, Paper, Grid, Typography, Container, Button } from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.js'

function Auth() {
    const [showPassword, setShowPassword] = useState(false);
    const classes = useStyles();
    const [isSignup, setIsSignup] = useState(false);
    const handleShowPassword = () => setShowPassword(!showPassword);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">{ isSignup ? 'Sign Up' : 'Sign In' }</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignup && (
                            <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="LastName" label="Last Name" handleChange={handleChange}  half />
                            </>
                        )}
                        <Input name="email" label="Email address" handleChange={handleChange} type="email" />
                        <br/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password"  /> }
                    </Grid>
                    <Button type="submit" fullWidth color="primary" variant="contained" className={classes.submit}> { isSignup ? 'Sign up' : 'Sign In' } </Button>
                    <Grid container justify="flex-end">
                            <Grid item>
                                <Button onClick={switchMode}>{ isSignup ? 'already ahve an account? Sign In' : "Don't have an account ? Sign up" }</Button>
                            </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
