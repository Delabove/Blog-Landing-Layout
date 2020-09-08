import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import postData from './postData';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';




const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    [theme.breakpoints.down("md")] : {
    maxWidth: 200
      },
      grid:{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      },
      gridList: {
        width: 1000,
        height: 2000,
        display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
      },
      sectionTitle: {
        marginTop: theme.spacing(10)
      },
      description: {
        marginTop: theme.spacing(3),
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
      card: {
        maxWidth: 845,

      },
      cardActions: {
        marginRight: theme.spacing(10)
      }
    }));



export default function CurrentArticles(post){

    const classes = useStyles();



    return(
    <React.Fragment>
            <div className={classes.root}>
            <Typography variant="h1" className={classes.sectionTitle} spacing={5}>
            Articles
             </Typography>
             <Grid container xs={12} md={6}  spacing={5} className={classes.grid}>
                <GridList xs={12} md={6} cellHeight={580}  spacing={5} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    <ListSubheader component="div"></ListSubheader>
                    </GridListTile>
                    {postData.map((post) => (
                    <Card key={post.img} className={classes.card}>
                        <CardMedia
                          component="img"
                          alt={post.title}
                          height="350"
                          image={post.img}
                          title="Blog Posts"
                        />
                        <CardContent >
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                            </Typography>
                            <Typography>
                            {post.date}
                            </Typography>
                          <Typography>
                            {post.readTime}
                          </Typography>
                          <Box className={classes.description}>
                            <Typography>
                            {post.description}
                            </Typography>
                            </Box>
                          </CardContent>
                        <CardActions className={classes.cardActions}>

                              <Link color="primary">
                                Share
                              </Link>
                              <Link color="primary">
                             Continue Reading
                            </Link>
                        </CardActions>
                    </Card>
                    ))}
                </GridList>
                </Grid>
            </div>
    </React.Fragment>
    )
}







