import React from 'react';
import { AppBar, Typography, Container, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import './Home.css';

const saleItems = [
    {
        title: 'EA SPORTS FC 24 Standard Edition',
        discount: '-80%',
        originalPrice: '₹3,499',
        discountedPrice: '₹699.80',
        imageUrl: 'https://sm.ign.com/ign_in/cover/e/ea-sports-/ea-sports-fc-24_jd6a.jpg'
    },
    {
        title: 'Alan Wake 2',
        discount: '-20%',
        originalPrice: '₹2,748',
        discountedPrice: '₹2,198.40',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/Alan_Wake_2_box_art.jpg/220px-Alan_Wake_2_box_art.jpg'
    },
    {
        title: 'Red Dead Redemption 2',
        discount: '-60%',
        originalPrice: '₹3,199',
        discountedPrice: '₹1,279.60',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8XIo6W6f_H2-qm_lPBVi-Oig1UEHGNgheOg&s'
    },
    {
        title: 'Grand Theft Auto V: Premium Edition',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Grand_Theft_Auto_V.png/220px-Grand_Theft_Auto_V.png'
    },
    {
        title: 'Hollow Knight',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_h3u9.jpg'
    },
    {
        title: 'Armored Core VI: Fires of Rubicon',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_ge1y.jpg'
    },
    {
        title: 'Marvels Spider-Man Remastered',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_f3u9.jpg'
    },
    {
        title: 'Wolfenstein II: The New Colossus',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_j1ze.jpg'
    },
    {
        title: 'Final Fantasy XIV',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl:'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_3tjt.jpg'
    },
    {
        title: 'Final Fantasy VII Remake',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_gjpn.jpg '
    },
    {
        title: ' God of War',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_19g6.jpg'
    },
    {
        title: 'Nier: Automata',
        discount: '-50%',
        originalPrice: '₹2,321.44',
        discountedPrice: '₹1,160.72',
        imageUrl: 'https://sm.ign.com/ign_in/photo/t/the-25-bes/the-25-best-pc-games-to-play-right-now_yknz.jpg'
    },

];

const Home = () => {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: '#1b2838' }}>
             
            </AppBar>
            <Container>
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h4" sx={{ color: '#FFF', mb: 2 }}>MEGA Sale Spotlight</Typography>
                    <Grid container spacing={4}>
                        {saleItems.map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card sx={{ backgroundColor: '#2a475e', color: '#FFF' }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={item.imageUrl}
                                        alt={item.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body2">{item.discount}</Typography>
                                        <Typography variant="body1"><s>{item.originalPrice}</s></Typography>
                                        <Typography variant="h6">{item.discountedPrice}</Typography>
                                        <Typography variant="body1">{item.title}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Home;
