import React from 'react';
import Navbar from "../components/nav";
import Cards from "../components/cards";
import { database } from "../database";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './allProducts.css'

const AllProducts = () => {
    const dataShow = database.map((item) => <Cards img={item.img} title={item.title} type={item.type} price={item.price} />)
    return (
        <>
            <div className="container">
                <Navbar />
                <br /><br /><br />
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
            </div>
        </>
    );
}

export default AllProducts;
