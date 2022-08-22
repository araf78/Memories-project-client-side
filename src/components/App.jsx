import React from 'react';
import { AppBar, Typography, Grow, Grid, Container } from "@material-ui/core";
import memories2 from './assets/memories2.jpg'
import Posts from './posts/Posts';
import Form from './form/Form';
import useStyles from "./AppStyles"

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} varient="h2" align="center">Memories</Typography>
        <img className={classes.image}  src={memories2} alt="memories" height="40"  />
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justify='space-between' alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7} >
                <Posts></Posts>
            </Grid>
            <Grid item xs={12} sm={4} >
                <Form></Form>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
