import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";

import ImageApp from "./Images/ImageApp.png";
import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Container maxidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant='h2' align='center'>
            Image App
          </Typography>
          <img
            className={classes.image}
            src={ImageApp}
            alt='ImageApp'
            width='60'
          />
        </AppBar>
        <Grow in='true'>
          {/* Simple Animation */}
          <Container>
            <Grid
              container
              justify='space-between'
              alignItems='stretch'
              spacing='3'
            >
              <Grid item xs={12} sm={7}>
                {/* 12 Whole Screen on Small devices 7 little bit more than half screen */}
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}
