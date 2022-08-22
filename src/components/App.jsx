import React  from 'react';
import {  AppBar, Typography, Grow, Grid, Container} from "@material-ui/core";
import memories from './assets/memories.jpg'

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position='static' color='inherit'>
          <Typography varient="h2" align="center">Memories</Typography>
          <img src={memories} alt="memories" height="200" width="200" mx-auto/>
      </AppBar>
      <Grow in>
        <Container >
          <Grid container justify='space-between' alignItems="stretch" spacing={3}>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
