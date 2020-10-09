import React from 'react'
import './Styling/home.css';
import Product from "./Product"
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
function Home() {
    const classes = useStyles();
    return (
        <div className="home">
          <Grid container spacing={3} justify="center"> 
        <Grid item xs={12} md={12}>
          <div>
            <a href="https://www.primevideo.com/storefront/home/ref=atv_nb_logo" target="_blank" rel="noopener noreferrer" >
           <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="prime" className="home__image"/> 
           </a>
           </div>
           </Grid>
           </Grid>
           <div className="home__row">
           <Grid container spacing={3} justify="center">
           <Grid item xs={12} md={6}>
           <div className="product">
           <Product  key={1} id={1} title={"MI band 4"} price={2499} rating={3} image={"data:image/webp;base64,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"}/>
           </div>
           </Grid>
           <Grid  item xs={12} md={6}>
             <div className="product">
           <Product key={2} id={2} title={"Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)"} price={9749} rating={3} image={"https://images-na.ssl-images-amazon.com/images/I/71sBbHNNIGL._SL1000_.jpg"}/>
           </div>
           </Grid>

           </Grid>
        </div>
        <div className="home__row">
        <Grid container spacing={3} justify="center"> 
        <Grid item xs={12} md={4}>
           <div className="product">
        <Product key={3} id={3}  title={"Apple iPhone 11 (64GB) - White"} price={66330} rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"}/>
        </div>
        </Grid>
        <Grid item xs={12} md={4}>
           <div className="product">
         <Product key={4} id={4}  title={"Samsung Galaxy Tab A 10.1 (10.1 inch, 32GB, Wi-Fi), Black"} price={14999} rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/7129zuJr4zL._SL1500_.jpg"}/>
         </div>
        </Grid>
        <Grid item xs={12} md={4}>
           <div className="product">
<Product key={5} id={1234}  title={"Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage)"} price={14999} rating={3} image={"https://images-na.ssl-images-amazon.com/images/I/81MkiDFq80L._SL1500_.jpg"}/> 
</div>
        </Grid>
        </Grid>
       </div>
        <div className="home__row">
        <Grid container spacing={3} justify="center">  
        <Grid item xs={12} md={12}>
           <div className="product">
          <Product key={6} id={5}  title={"OnePlus Y Series 80 cm (32 inches) HD Ready LED Smart Android TV 32Y1 (Black) (2020 Model)"} price={14999} rating={4} image={"https://images-na.ssl-images-amazon.com/images/I/817gj7pfUzL._SL1500_.jpg"}/>
          </div>
        </Grid>
        </Grid>
        </div>
        </div>
    )
}

export default Home
