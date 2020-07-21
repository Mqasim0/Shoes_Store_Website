import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Shoes from '../shoes.json';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 20,
    // width: 900,
    // height: 400,
  },
  // details: {
  //   display: 'flex',
  //   flexDirection: 'column',
  // },
  // content: {
  //   flex: '1 0 auto',
  // },
  // cover: {
  //   width: 451,
  // },
  // controls: {
  //   display: 'flex',
  //   alignItems: 'center',
  //   paddingLeft: theme.spacing(1),
  //   paddingBottom: theme.spacing(1),
  // },
}));

export default function MediaControlCard({ handleChangeHandler }) {
  const classes = useStyles();
  const theme = useTheme();
  const { slug } = useParams();
  const shoe = Shoes[slug];
  console.log(shoe.img);

  if (!shoe) {
    return <h2>Product Not Found</h2>;
  }
  return (
    <Grid container style={{ padding: '20px' }}>
      <Grid item xs={12} sm={12}>
        <Grid container>
          <Grid item xs={12} sm={2}></Grid>
          <Paper elevation={3}>
            <Grid item xs={12} sm={12} md={3}>
              <img src={shoe.img} style={{ width: '300px' }} />
            </Grid>
          </Paper>

          <Grid item xs={12} sm={12} md={4} style={{ paddingTop: '41px' }}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Grid container>
                  <Grid item xs={12} sm={8}>
                    <Typography component='h5' variant='h5'>
                      {shoe.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography
                      component='h5'
                      variant='h5'
                      style={{
                        border: '1px solid cyan',
                        backgroundColor: 'cyan',
                        color: 'black',
                        boxShadow: '2px 2px 2px 2px cyan',
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}
                    >
                      {`PKR .${shoe.price}`}
                    </Typography>
                  </Grid>
                </Grid>

                <p>{shoe.detail}</p>
                <Button
                  size='large'
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: 'black',
                  }}
                  onClick={() => handleChangeHandler(shoe)}
                >
                  <ShoppingCartIcon /> Add to Cart
                </Button>
                <Link to='/product'>
                  <Button
                    size='large'
                    style={{
                      textAlign: 'center',
                      color: 'black',
                      backgroundColor: 'cyan',
                      margin: '4px',
                      textDecoration: 'none',
                    }}
                  >
                    Back
                  </Button>
                </Link>
              </CardContent>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
