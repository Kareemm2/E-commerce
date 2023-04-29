import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import '../styles/product.css';

function valuetext(value) {
    return `${value}°C`;
}

export const Product = () => {
    return (
        <>
            <div className='d-flex'>
                <div className="main">
                    <div className="img">
                        <img src={require('../assets/9.png')} alt="img" />
                    </div>
                    <h1>Winter jacket</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam, facilis quos repellendus ab earum unde aspernatur nulla. Aliquam odit vel exercitationem placeat, sunt veritatis cum culpa impedit tenetur vero.
                    </p>
                    <div className="colors">
                        <h3>available colors</h3>
                        <ul>
                            <li><div draggable title='red'></div></li>
                            <li><div title='blue'></div></li>
                            <li><div title='green'></div></li>
                            <li><div title='black'></div></li>
                            <li><div title='white'></div></li>
                        </ul>
                    </div>
                    <div className="slider">
                        <h3>select the size</h3>
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Temperature"
                                defaultValue={34}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={2}
                                marks
                                min={32}
                                max={48}
                            />
                        </Box>
                    </div>
                    <button type="submit">BUY NOW</button>
                </div>
            </div>
        </>
    );
}

export default Product;