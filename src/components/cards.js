import React from 'react';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const Cards = (props) => {

    return (
        <>
            <div className="card">
                <div className="img"><img src={props.img} alt="img" /></div>
                <h4 className="name">{props.title}</h4>
                <h5 className="type">{props.type}</h5>
                <h6 className="price">{props.price}</h6>
                <div className='foot'>
                    <Link to="product">BUY</Link>
                    <Stack className='rate' spacing={1}>
                        <Rating name="size-small" defaultValue={3} size="small" />
                    </Stack>
                </div>
            </div>

        </>
    );
}

export default Cards;
