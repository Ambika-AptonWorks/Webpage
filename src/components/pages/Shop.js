import React, { useState } from 'react';
import './Shop.css';
import Shopdata from './Shopdata';

function Shop() {
    const [data, setData] = useState(Shopdata);
    const [amount,setAmount]=useState(Shopdata)
    const Filterdata=(catItem)=>{
        const result=Shopdata.filter((categories)=>{
            return categories.category===catItem;
        });
        setData(result) 
    }
    
    return (
        <>
            <h1 className='text-center text-info'>Let's Shop</h1>
            <div className='container-fluid mx-2'>
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3'>
                        <button className='btn btn-warning w-100 mb-2'onClick={()=>Filterdata('Men')}>Men</button>
                        <button className='btn btn-warning w-100 mb-2'onClick={()=>Filterdata('Wemen')}>Wemen</button>
                        <button className='btn btn-warning w-100 mb-2'onClick={()=>Filterdata('Children')}>Children</button>
                        <button className='btn btn-warning w-100 mb-2'onClick={()=>setData(Shopdata)}>All</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {data.map((values) => {
                                const{id,title,price,image}=values;
                                return (
                                    <>
                                        <div className='col-md-4 mb-5' key={id}>
                                            <div class="card">
                                                <img src={image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{title}</h5>
                                                    <div id="p2">Price:{price}$</div>
                                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <button class="btn btn-dark">BuyNow</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Shop