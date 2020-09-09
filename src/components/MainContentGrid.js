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
import { TabList, TabPanel } from 'react-tabs';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: theme.spacing(5)

  },
  gridList: {

    width: 500,
    height: 1200,

  },
  card: {

      maxWidth: 345,

  },
  mainTitle: {
    textAlign: 'center',
    marginTop: theme.spacing(12)
  },
}));

export default function AdvancedGridList() {
  const classes = useStyles();

  return (
<>
    <Typography className={classes.mainTitle} variant='h2'>
            Recent Articles
    </Typography>
    <div className={classes.root}>
      <GridList cellHeight={400} spacing={1} className={classes.gridList} cols={6}>
{postData.map((post) => (
  <Grid xs={12} md={6}>
  <Card  key={post.img} className={classes.card} cols={post.cols || 1}>
      <CardMedia className={classes.card}
        component="img"
        alt={post.title}
        height="140"
        image={post.img}
        title="Blog Posts"
      />
      <CardContent xs={12} md={6} >
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
          <Typography variant="body2" color="textSecondary" component="p">
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
  </Grid>
        ))}

      </GridList>

    </div>
    </>
    )
}

