import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../images/4.png';
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 220,
  },
});
const Cart = ({ cart }) => {
  const classes = useStyles();

  console.log('cart ' + cart);
  if (!cart) {
    return <h1>Cart is empty</h1>;
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <ShoppingCartIcon /> Cart
      </h1>
      <Grid container style={{ padding: '30px' }}>
        {cart.map((val, index) => {
          return (
            <Grid
              key={index}
              item
              xs={12}
              sm={12}
              md={8}
              style={{
                padding: '4px',
              }}
            >
              <Card key={val} className={classes.root}>
                <CardActionArea>
                  {/* <CardMedia
                  className={classes.media}
                  image={val.img}
                  title='Contemplative Reptile'
                /> */}
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={8}>
                        <Typography gutterBottom variant='h6' component='h2'>
                          {val.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Typography
                          gutterBottom
                          variant='h6'
                          component='h2'
                          style={{
                            border: '1px solid cyan',
                            backgroundColor: 'cyan',
                            color: 'black',
                            boxShadow: '2px 2px 2px 2px cyan',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          {`PKR.${val.price}`}
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Cart;
