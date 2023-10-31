import React from 'react';
import Card from '../card/Card';
import MainImage from '../mainImage/MainImage';
import Navbar from '../navbar/Navbar';

function Home(){
    return(
        <>
        <Navbar/>
        <MainImage/>
        <Card/>
        </>
    )
}

export default Home;