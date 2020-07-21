import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import image1 from '../images/1.png';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
    color: 'black',
    padding: 2,
  },
  root: {
    margin: 0,
    padding: 0,
    marginBottom: 0,
  },
  styleNavbar: {
    marginTop: 25,
    // [theme.breakpoints.up('xs')]: {
    //   marginTop: 0,
    // },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      style={{
        backgroundColor: 'white',

        boxShadow: '1px 1px 1px 1px cyan',
      }}
    >
      <Grid item xs={12} sm={8}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <img
              src={image1}
              style={{
                height: '60px',
                width: '100px',
              }}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <h2>SHOE STORE</h2>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.styleNavbar}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Link
            to='/'
            className={classes.link}
            style={{ textDecoration: 'none' }}
          >
            <HomeIcon className={classes.icon} />
            Home
          </Link>
          <Link
            color='inherit'
            to='/product'
            className={classes.link}
            style={{ textDecoration: 'none' }}
          >
            <WhatshotIcon className={classes.icon} />
            Products
          </Link>
          <Link
            to='/cart'
            color='textPrimary'
            className={classes.link}
            style={{ textDecoration: 'none' }}
          >
            <ShoppingCartIcon className={classes.icon} />
            Cart
          </Link>
        </Breadcrumbs>
      </Grid>
    </Grid>
  );
}
