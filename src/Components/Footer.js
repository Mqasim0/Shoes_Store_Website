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

export default function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      style={{
        backgroundColor: 'black',
        color: 'white',
        boxShadow: '1px 1px 1px 1px cyan',
      }}
    >
      <Grid item xs={12} sm={12}>
        <h4 style={{ textAlign: 'center' }}>
          CopyRight @ 2020 By: Muhammad Qasim
        </h4>
      </Grid>
    </Grid>
  );
}
