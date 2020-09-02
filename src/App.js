import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Image from '../src/img/F.png';
import Logo from '../src/img/logo.png';
import { Container } from '@material-ui/core/';
import { Grid } from '@material-ui/core/';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';





const useStyles = makeStyles((theme) => ({
  appBar:{
    backgroundColor: "#fff"
  },
  logo:{
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    position: "center",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
  },
  blogsContainer:{
    paddingTop: theme.spacing(3)
  },
  blogTitle:{
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    float: "left",
    marginLeft: "0",
  },
  card: {
    maxWidth: '75%'
  },
  media: {
    height: 540,
    maxWidth: '75%'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className="App">
    <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <img className={classes.logo} src={Logo} alt="Logo" />
        </Toolbar>

      </AppBar>

      <Box>
        <Box className={classes.hero}> React Blog w/ Hero Image</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
      </Container>

      <Grid container spacing={(3)}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/chicken.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Return of Fresh Eggs
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum ad maxime magni similique illo aperiam excepturi, totam, quisquam consequuntur necessitatibus voluptas? Ducimus fugit beatae esse pariatur, in illum repudiandae.
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/cow.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           5 Main Benefits of Raising Cattle
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in quibusdam asperiores doloremque aliquid distinctio accusamus expedita dignissimos veritatis dicta laudantium consequatur ipsum nobis vel eum, sit similique obcaecati minima?
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/eggplant.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Eggplants: Underestimated Veggies
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum, consequuntur labore, molestiae aut non suscipit possimus ab nihil in, illo facere culpa praesentium placeat. Inventore accusantium repellendus sit dolor?
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/farm.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Why We Traded the City for the Farm
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur illo molestiae non ut odio dolorem dolor nulla inventore suscipit veritatis laboriosam repudiandae pariatur animi, accusantium corporis. Veritatis excepturi dolor maxime!
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
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/goat.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            3 Things You Can Learn From a Goat
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aut ducimus dolore deleniti quod. Dolores suscipit neque vel dicta, amet consectetur earum dignissimos iusto nemo officiis voluptas error, sapiente laborum.
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
          </Card>
        </Grid>

      <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
          <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require('../src/img/squash.png')}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Squash: To Steam or Bake
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quasi non delectus adipisci, fuga molestias tempora debitis eveniet minus placeat obcaecati fugit ab doloribus, rerum vitae perferendis asperiores earum.
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
          </Card>
        </Grid>
        </Grid>



    </div>
  );
}

export default App;
