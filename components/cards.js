import React from 'react';
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
<Stack spacing={1}>
    <Rating name="size-small" defaultValue={3} size="small" />
</Stack>

const Cards = (props) => {

    return (
        <>
            <div className="card">
                <di><img src={props.img} alt="img" /></di>
                <h4>{props.title}</h4>
                <h5>{props.type}</h5>
                <h6>{props.price}</h6>
                <div>
                    <>BUY</>

                </div>
            </div>

        </>
    );
}

export default Cards;
