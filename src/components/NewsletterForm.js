import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
buttonContainer: {
    width: 300,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(3)
    },
    inputLabel: {
        fontSize: 20
    },

    signUpForm: {
    maxWidth: 1000,
    height: 280,
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20)
    },

    helper:{
    textAlign: 'center'
    }

}));

const NewsletterForm =  ({}) => {

    const classes = useStyles();
return(


    <Grid
    container
    direction="row"
    display="flex"
    alignItems="center"
    justify="center"
    style={{ minWidth: '0'}}>
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.signUpForm} elevation={24}>
            <CardContent>
                <Typography variant="h4">Hey You!</Typography>
                <Typography variant="h6">Enter your email address for Texas Fresh updates!</Typography>
                <FormControl>
                    <InputLabel className={classes.inputLabel} htmlFor="my-input">Enter Email</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText className={classes.helper} id="my-helper-text">We promise to never share your email.</FormHelperText>
                    <React.Fragment>
                        <Button className={classes.buttonContainer} variant="contained" color="primary">
                            Join!
                        </Button>
                    </React.Fragment>
                </FormControl>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
)
}
export default NewsletterForm;