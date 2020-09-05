import React from 'react';
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

const CurrentArticles = () => {

    const classes = useStyles();


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
                <CardMedia
                    className={classes.media}
                    image={require('../img/chicken.png')}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    5 Main Benefits of Raising Cattle
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in quibusdam asperiores doloremque aliquid distinctio accusamus expedita dignissimos veritatis dicta laudantium consequatur ipsum nobis vel eum, sit similique obcaecati minima?
                    </Typography>
                    <Typography>
                    Published: August 1, 2020
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Read More
                </Button>
                </CardActions>
                    </Card>
                </Grid>



                <Grid item xs={12} md={6}
                    display="flex"
                    justifyContent="center"
                    alignItems="center">
                        <Card className={classes.bigCard} elevation={24}>
                        <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={require('../img/cow.png')}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        5 Main Benefits of Raising Cattle
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in quibusdam asperiores doloremque aliquid distinctio accusamus expedita dignissimos veritatis dicta laudantium consequatur ipsum nobis vel eum, sit similique obcaecati minima?
                        </Typography>
                        <Typography>
                        Published: August 1, 2020
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                    </CardActions>
                        </Card>
                </Grid>
            </Box>

            <Box
            display="flex"
            justifyContent="center"
            alignItems="center">
                <Grid item xs={4}
                >
                <Card className={classes.smallCard} elevation={24}>
                        <CardActionArea>
                    <CardMedia
                        className={classes.smallMedia}
                        image={require('../img/eggplant.png')}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Eggplants: Underestimated Veggies
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum, consequuntur labore, molestiae aut non suscipit possimus ab nihil in, illo facere culpa praesentium placeat. Inventore accusantium repellendus sit dolor?
                        </Typography>
                        <Typography>
                        Published: August 1, 2020
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Read More
                    </Button>
                    </CardActions>
                        </Card>
                </Grid>

            <Grid item xs={4}>
            <Card className={classes.smallCard} elevation={24}>
            <CardActionArea>
            <CardMedia
                    className={classes.smallMedia}
                    image={require('../img/farm.png')}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Why We Traded the City for the Farm
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur illo molestiae non ut odio dolorem dolor nulla inventore suscipit veritatis laboriosam repudiandae pariatur animi, accusantium corporis. Veritatis excepturi dolor maxime!
                    </Typography>
                    <Typography>
                    Published: August 1, 2020
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Read More
                </Button>
                </CardActions>
                    </Card>
                </Grid>
                    <Grid item xs={4}>
                    <Card className={classes.smallCard} elevation={24}>
                    <CardActionArea>
                <CardMedia
                    className={classes.smallMedia}
                    image={require('../img/squash.png')}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Squash: To Steam or Bake
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quasi non delectus adipisci, fuga molestias tempora debitis eveniet minus placeat obcaecati fugit ab doloribus, rerum vitae perferendis asperiores earum.
                    </Typography>
                    <Typography>
                    Published: August 1, 2020
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Read More
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
                    <CardMedia
                        className={classes.biggestMedia}
                        image={require('../img/goat.png')}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        3 Things You Can Learn From a Goat
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aut ducimus dolore deleniti quod. Dolores suscipit neque vel dicta, amet consectetur earum dignissimos iusto nemo officiis voluptas error, sapiente laborum.
                        </Typography>
                        <Typography>
                        Published: August 1, 2020
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Read More
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


export default CurrentArticles;






