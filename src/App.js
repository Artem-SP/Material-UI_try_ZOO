import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Dialog,
  DialogContentText,
  TextField
} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Restore, Favorite, LocationOn, Folder } from "@material-ui/icons/";
import MenuIcon from "@material-ui/icons/Menu";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { makeStyles } from "@material-ui/core/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repiat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: "abslute",
    top: 0,
    bottom: 0,
    risht: 0,
    left: 0,
    backgroundOverlay: "rgba(0,0,0,.3)"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}));

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              area-laable="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              ZOO
            </Typography>
            <Box mr={3}>
              <Button
                color="inherit"
                variant="outlend"
                onClick={handleClickOpen}
              >
                Log in
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-laablledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title"> Log in </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    {" "}
                    Для початку роботи потрібно увійти в систему{" "}
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dance"
                    id="name"
                    type="email"
                    lable="Emale Adress"
                    fullWidth
                  ></TextField>
                  <TextField
                    autoFocus
                    margin="dance"
                    id="pass"
                    lable="Pasword"
                    type="Password"
                    fullWidth
                  ></TextField>
                </DialogContent>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: "url(https://source.unsplash.com/random)" }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant-="h3"
                    color="inherit"
                    gutterBottom
                  ></Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum maecenas massa elementum: nibh mattis, gravida
                    fusce, nibh magna congue massa quam: risus nibh, fusce
                    tempus fusce sagittis magna auctor. Morbi, urna sit: tempus
                    quisque nam sem ligula at ut fusce odio orci lorem, orci.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              ZOO
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecodary"
              paragraph
            >
              Lorem ipsum maecenas massa elementum: nibh mattis, gravida fusce,
              nibh magna congue massa quam: risus nibh, fusce tempus fusce
              sagittis magna auctor. Morbi, urna sit: tempus quisque nam sem
              ligula at ut fusce odio orci lorem, orci.
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={5} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Sart now
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="image title"
                  />
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      {`Blog post ${card}`}
                    </Typography>
                    <Typography>Blog post. This is ZOO</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            lable="Recents"
            value="recents"
            icon={<Restore />}
          />
          <BottomNavigationAction
            lable="Favorites"
            value="favorites"
            icon={<Favorite />}
          />
          <BottomNavigationAction
            lable="Nearby"
            value="nearby"
            icon={<LocationOn />}
          />
          <BottomNavigationAction
            lable="Folder"
            value="folder"
            icon={<Folder />}
          />
        </BottomNavigation>
        <Typography
          align="center"
          color="secondary"
          component="p"
          variant="subtitle1"
        >
          ZOO
        </Typography>
      </footer>
    </>
  );
}
export default App;
