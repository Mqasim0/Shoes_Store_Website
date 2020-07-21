import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from '../images/4.png';
import Grid from '@material-ui/core/Grid';
import Shoes from '../shoes.json';
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

export default function MediaCard({ handleChangeHandler }) {
  const classes = useStyles();
  console.log(Shoes);
  console.log(Object.entries(Shoes));
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <ShoppingCartIcon style={{ fontSize: '30px' }} />
        PRODUCTS
      </h1>
      <Grid container style={{ padding: '30px' }}>
        {Object.keys(Shoes).map((val) => {
          const shoe = Shoes[val];
          console.log(shoe);
          return (
            <Grid
              item
              xs={12}
              sm={3}
              md={3}
              style={{
                padding: '6px',
              }}
            >
              <Card className={classes.root} key={val}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={shoe.img}
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Grid container>
                      <Grid item xs={12} sm={12} md={8}>
                        <Typography gutterBottom variant='h6' component='h2'>
                          {shoe.name}
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
                          {`PKR.${Shoes[val].price}`}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {shoe.detail}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/${val}`} style={{ textDecoration: 'none' }}>
                    <Button
                      size='small'
                      style={{
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '10px',
                      }}
                    >
                      <InfoIcon /> More Info
                    </Button>
                  </Link>
                  <Button
                    size='small'
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '10px',
                    }}
                    onClick={() => handleChangeHandler(shoe)}
                  >
                    <ShoppingCartIcon />
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
