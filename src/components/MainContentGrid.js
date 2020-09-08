import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import postData from './postData';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
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
        margin: theme.spacing(5)
      },
      titleBar: {
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
      },
      icon: {
        color: 'rgba(255, 255, 255, 0.54)',
      },
      card: {
        width:1000,
        height:10000
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
             <Grid container spacing={5} className={classes.grid}>
                <GridList cellHeight={600}  spacing={30} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                    <ListSubheader component="div"></ListSubheader>
                    </GridListTile>
                    {postData.map((post) => (
                    <Card key={post.img} className={classes.card} >
                        <CardMedia
                          component="img"
                          alt={post.title}
                          height="310"
                          image={post.img}
                          title="Contemplative Reptile"
                        />
                        <CardContent description={post.description}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                            </Typography>
                            <Typography>
                            {post.date}
                            </Typography>
                            <Typography>
                            {post.description}
                            </Typography>
                          </CardContent>
                        <CardActions>
                          <Typography>
                            {post.readTime}
                          </Typography>
                          <Link color="primary">
                            Share
                          </Link>
                          <Link size="small" color="primary">
                            Learn More
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







{/* <Card>
<CardActionArea>
  <CardMedia key={post.img}
    className={classes.media}
    img={post.img}
    title={post.title}
  />
  <CardContent>
    <Typography title={post.title} gutterBottom variant="h5" component="h2">

    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
      across all continents except Antarctica
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Share
  </Button>
  <Button size="small" color="primary">
    Learn More
  </Button>
</CardActions>
// </Card> */}