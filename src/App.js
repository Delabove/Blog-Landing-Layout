import React from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Image from '../src/img/F.png';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Navbar from '../src/components/Navbar';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import MyApp from './MyApp';
import Footer from '../src/components/Footer';
import CurrentArticles from '../src/components/CurrentArticles';

const useStyles = makeStyles((theme) => ({

  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0, 0, 0, 0.5)), url(${Image})`,
    height: "800px",
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

  blogsContainer: {
    paddingTop: theme.spacing(20),
  },

  // blogTitle:{
  // paddingBottom: theme.spacing(3),
  // },

  // card: {
  //   maxWidth: '100%',
  //   margin: theme.spacing(3)
  // },

  // media: {
  //   height: 540,
  // },

  // cardActions: {
  //   display: "flex",
  //   margin: "0 10px",
  //   justifyContent: "space-between"
  // },

  // author: {
  //   display: "flex"
  // },

  // paginationContainer: {
  //   display: "flex",
  //   justifyContent: "center",
  //   marginBottom: 150,
  //   marginTop: 150
  // },

  tabs: {
    marginBottom: 150,
    marginTop: 150,
  },

  archives:{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    '& > *': {
      margin: theme.spacing(15),
      width: theme.spacing(2),
      height: theme.spacing(2),
      fontSize: 30,
  },
},


}));

function App() {

  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const preventDefault = (event) => event.preventDefault();

  return (
    <ScopedCssBaseline>
    <div className="App">

      <Navbar />

        <Box className={classes.hero} ></Box>
      <Box>
      </Box>

<CurrentArticles />

    <Typography variant="h1" className={classes.bestList}>
      Most Popular
    </Typography>

    <Paper className={classes.tabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.tab1} label="Most Viewed" />
        <Tab  className={classes.tab2} label="Most Commented" />
        <Tab  className={classes.tab3} label="Most Shared" />
      </Tabs>
    </Paper>

    <Divider variant="middle" />
      <Typography variant="h1" className={classes.archives}>
        Want More?
      </Typography>
      <Typography variant="h5" className={classes.moreContent}>
        Check out these links for Texas Fresh farm memories!
      </Typography>
      <Typography className={classes.archives}>
        <Link href="#" onClick={preventDefault}color="inherit">
          2017
        </Link>
        <Link href="#" onClick={preventDefault} color="inherit">
          2018
        </Link>
        <Link href="#" onClick={preventDefault} color="inherit">
          2019
        </Link>
    </Typography>

    <Divider variant="middle" />

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

    </div>
      <React.Fragment>
      <Footer />
      </React.Fragment>
    <MyApp/>
    </ScopedCssBaseline>


  );
}

export default App;





// <GridList cellHeight={200} spacing={1} className={classes.gridList}>

// style={{ minHeight: '53vh' }}>

// {/* <Grid container className={classes.smallGridContainer} direction= 'row'>
// <Grid className={classes.cardGridContainer} */}
// {/* container
// spacing={0}
// flexWrap="nowrap"
// direction="row"
// display="flex"
// alignItems="center"
// justify="center"
// overflow="hidden"> */}
// <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}></GridListTile>

//             <Card className={styles.smallCard} elevation={24}>
//             <CardActionArea>
//             <CardMedia
//             className={styles.media}
//             image={require('../img/chicken.png')}
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//             5 Main Benefits of Raising Cattle
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in quibusdam asperiores doloremque aliquid distinctio accusamus expedita dignissimos veritatis dicta laudantium consequatur ipsum nobis vel eum, sit similique obcaecati minima?
//             </Typography>
//             <Typography>
//             Published: August 1, 2020
//             </Typography>
//         </CardContent>
//         </CardActionArea>
//         <CardActions>
//         <Button size="small" color="primary">
//             Share
//         </Button>
//         <Button size="small" color="primary">
//             Learn More
//         </Button>
//         </CardActions>
//             </Card>



//         <Card className={styles.smallCard} elevation={24}>
//         <CardActionArea>
//         <CardMedia
//         className={styles.media}
//         image={require('../img/cow.png')}
//     />
//     <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//         5 Main Benefits of Raising Cattle
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat in quibusdam asperiores doloremque aliquid distinctio accusamus expedita dignissimos veritatis dicta laudantium consequatur ipsum nobis vel eum, sit similique obcaecati minima?
//         </Typography>
//         <Typography>
//         Published: August 1, 2020
//         </Typography>
//     </CardContent>
//     </CardActionArea>
//     <CardActions>
//     <Button size="small" color="primary">
//         Share
//     </Button>
//     <Button size="small" color="primary">
//         Learn More
//     </Button>
//     </CardActions>
//         </Card>

//     <Card className={styles.smallCard} elevation={24}>
//             <CardActionArea>
//         <CardMedia
//             className={styles.media}
//             image={require('../img/eggplant.png')}
//         />
//         <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//             Eggplants: Underestimated Veggies
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cum, consequuntur labore, molestiae aut non suscipit possimus ab nihil in, illo facere culpa praesentium placeat. Inventore accusantium repellendus sit dolor?
//             </Typography>
//             <Typography>
//             Published: August 1, 2020
//             </Typography>
//         </CardContent>
//         </CardActionArea>
//         <CardActions>
//         <Button size="small" color="primary">
//             Share
//         </Button>
//         <Button size="small" color="primary">
//             Learn More
//         </Button>
//         </CardActions>
//             </Card>
// </GridList>

// <GridList cellHeight={600} spacing={1}  className={classes.bigGridList} direction= 'row'>

// <Grid container className={styles.bigGridContainer} direction= 'row'>
// <Grid  className={styles.cardGridContainer}
// container
// spacing={0}
// flexWrap="nowrap"
// direction="row"
// display="flex"
// alignItems="center"
// justify="center"
// overflow="hidden"
// width= "1000"
// marginLeft="1000">



// <Card className={styles.bigCard} elevation={24}>
// <CardActionArea>
// <CardMedia
// className={styles.media}
// image={require('../img/farm.png')}
// title="Contemplative Reptile"
// />
// <CardContent>
// <Typography gutterBottom variant="h5" component="h2">
//   Why We Traded the City for the Farm
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
//   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur illo molestiae non ut odio dolorem dolor nulla inventore suscipit veritatis laboriosam repudiandae pariatur animi, accusantium corporis. Veritatis excepturi dolor maxime!
// </Typography>
// <Typography>
//   Published: August 1, 2020
// </Typography>
// </CardContent>
// </CardActionArea>
// <CardActions>
// <Button size="small" color="primary">
// Share
// </Button>
// <Button size="small" color="primary">
// Learn More
// </Button>
// </CardActions>
// </Card>



// <Card className={styles.bigCard} elevation={24}>
// <CardActionArea>
// <CardMedia
// className={styles.media}
// image={require('../img/goat.png')}
// title="Contemplative Reptile"
// />
// <CardContent>
// <Typography gutterBottom variant="h5" component="h2">
//   3 Things You Can Learn From a Goat
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
//   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam aut ducimus dolore deleniti quod. Dolores suscipit neque vel dicta, amet consectetur earum dignissimos iusto nemo officiis voluptas error, sapiente laborum.
// </Typography>
// <Typography>
//   Published: August 1, 2020
// </Typography>
// </CardContent>
// </CardActionArea>
// <CardActions>
// <Button size="small" color="primary">
// Share
// </Button>
// <Button size="small" color="primary">
// Learn More
// </Button>
// </CardActions>
// </Card>



// <Card className={styles.bigCard} elevation={24}>
// <CardActionArea>
// <CardMedia
// className={styles.media}
// image={require('../img/squash.png')}
// title="Contemplative Reptile"
// />
// <CardContent>
// <Typography gutterBottom variant="h5" component="h2">
//   Squash: To Steam or Bake
// </Typography>
// <Typography variant="body2" color="textSecondary" component="p">
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore culpa quasi non delectus adipisci, fuga molestias tempora debitis eveniet minus placeat obcaecati fugit ab doloribus, rerum vitae perferendis asperiores earum.
// </Typography>
// <Typography>
//   Published: August 1, 2020
// </Typography>
// </CardContent>
// </CardActionArea>
// <CardActions>
// <Button size="small" color="primary">
// Share
// </Button>
// <Button size="small" color="primary">
// Learn More
// </Button>
// </CardActions>
// </Card>
// </Grid>
// </Grid>
// </GridList>

// <Box my={4} className={styles.paginationContainer}>
// <Pagination count={10} />
// </Box>

// </React.Fragment>


