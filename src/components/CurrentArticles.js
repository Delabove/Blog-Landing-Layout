import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';



const useStyles = makeStyles((theme) => ({


    blogsContainer: {
        paddingTop: theme.spacing(20),
    },

    blogTitle:{
        paddingBottom: theme.spacing(3),
    },
    grid: {
        flexGrow:1,
        display: 'flex',
        justifyContent: 'center',
    },

    smallCard: {
        margin: theme.spacing(.6),
        width:479,
        height:625,
    },

    bigCard: {
        width: 727,
        height: 971,
        margin: theme.spacing(.3)
    },

    biggestCard: {
        maxWidth: '100%',
        height: 971,
        margin: theme.spacing(.3)
    },

    media: {
        width: 1000,
        height: 755,
    },
    smallMedia: {
        maxWidth: '100%',
        height: 400
    },
    biggestMedia: {
        maxWidth: '100%',
        height: 755,

    },

    cardActions: {
        display: "flex",
        margin: "0 10px",
        justifyContent: "space-between"
    },

    author: {
        display: "flex"
    },

    paginationContainer: {
        display: "flex",
        justifyContent: "center",
        marginBottom: 150,
        marginTop: 150
    },

}));

export default function CurrentArticles(props){

    const classes = useStyles();
    const { post } = props;


    return(
    <React.Fragment>
            <Typography variant="h1" className={classes.blogTitle}>
            Articles
            </Typography>
        <Grid container spacing={5} className={classes.grid}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12} md={6}>
                    <Card className={classes.bigCard} elevation={24}>
                        <CardActionArea>
                    <Hidden xsDown>
                        <CardMedia
                            className={classes.media}
                            image={post.image} title={post.imageTitle}
                        />
                    </Hidden>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                         </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>



                <Grid item xs={12} md={6}>
                    <Card className={classes.bigCard} elevation={24}>
                        <CardActionArea>
                        <Hidden xsDown>
                        <CardMedia
                            className={classes.media}
                            image={post.image} title={post.imageTitle}
                        />
                        </Hidden>
                        <CardContent>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Box>

            <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
                <Grid item xs={4}>
                    <Card className={classes.smallCard} elevation={24}>
                    <CardActionArea>
                    <Hidden xsDown>
                    <CardMedia
                        className={classes.smallMedia}
                        image={post.image} title={post.imageTitle}
                    />
                    </Hidden>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            Continue reading...
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                    </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card className={classes.smallCard} elevation={24}>
                        <CardActionArea>
                        <Hidden xsDown>
                        <CardMedia
                            className={classes.smallMedia}
                            image={post.image} title={post.imageTitle}
                        />
                        </Hidden>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                    </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={4}>
                    <Card className={classes.smallCard} elevation={24}>
                        <CardActionArea>
                        <Hidden xsDown>
                        <CardMedia
                            className={classes.smallMedia}
                            image={post.image} title={post.imageTitle}
                        />
                        </Hidden>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                    </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Box>

            <Box
                display="flex"
                maxWidth='100%'>
                <Grid item xs={12}>
                    <Card className={classes.biggestCard} elevation={24}>
                        <CardActionArea>
                        <Hidden xsDown>
                        <CardMedia
                            className={classes.biggestMedia}
                            image={post.image} title={post.imageTitle}
                        />
                        </Hidden>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                                Continue reading...
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        </CardActions>
                    </Card>
                </Grid>
                </Box>
                </Grid>
                <Box my={4} className={classes.paginationContainer}>
                    <Pagination count={10} />
                </Box>
    </React.Fragment>
    );
}

CurrentArticles.propTypes = {
    post: PropTypes.object,
  };





