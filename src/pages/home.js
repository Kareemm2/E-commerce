import React from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/nav";
import Cards from "../components/cards";
import { database } from "../database";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Home = () => {
    const dataShow = database.map((item) => <Cards img={item.img} title={item.title} type={item.type} price={item.price} />)
    return (
        <>
                <Navbar />
                <div className="header">
                    <div className="text">
                        <h1>E-commerce market</h1>
                        <p>Selling online has become a popular way for businesses to reach a wider audience and increase their sales. With the rise of e-commerce platforms, businesses can easily set up an online store and sell their products or</p>
                        <input type="button" value="Learn more" /> <Link to="/connect">Start selling</Link>
                    </div>
                    <img src={require('../assets/0.png')} alt="" />
                </div>
                <div className="products">
                    <h1 className="main-title">
                        All-products
                    </h1>
                    <div className="categorys">
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button>clothes</Button>
                            <Button>furnishings</Button>
                            <Button>devices</Button>
                            <Button>other</Button>
                        </ButtonGroup>

                    </div>
                    <div className="cards-parent">
                        {dataShow}
                    </div>
                    <div className='Pagination'>
                        <Stack spacing={2}>
                            <Pagination count={10} color="primary" />
                        </Stack>
                    </div>

                </div>
                <div className="footer">
                    © 2023 E-commerce Inc. All rights reserved
                </div>
        </>
    );
}

export default Home;
