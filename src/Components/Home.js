import React, { useState } from 'react';
import image2 from '../images/2.jpg';
import image3 from '../images/5.png';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './Home.module.css';
import image6 from '../images/6.svg';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Products from '../Components/Products';
import Cart from '../Components/Cart';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

const Home = ({ handleChangeHandler }) => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={styles.image}>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <h1>H.M.Q SHOE STORE</h1>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <img src={image6} />
            </Grid>
          </Grid>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
          <p>
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
          <Button
            size='large'
            style={{
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'black',
            }}
          >
            <ShoppingCartIcon /> BUY NOW
          </Button>
        </Grid>
        <Grid item xs={2} sm={3} md={6}>
          <img src={image3} className={classes.root} />
        </Grid>
      </Grid>
      <Products handleChangeHandler={handleChangeHandler} />
    </>
  );
};

export default Home;
