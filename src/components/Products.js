import React, { useState, useEffect } from 'react'
import Skeleton from "react-loading-skeleton";
import { NavLink } from 'react-router-dom';

export const Products = () => {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)
    let mount = true;

    useEffect(() => {
        const getproduct = async () => {
            setloading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (mount) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
                console.log(filter);
                console.log(data)

            }
            return () => {
                mount = false;
            }
        }
        getproduct()
       
    }, [])

    const Loading = () => {
        <>
        <div className='col-md-3'>
            <Skeleton height={350}/>
        </div>

        <div className='col-md-3'>
            <Skeleton height={350}/>
        </div>

        <div className='col-md-3'>
            <Skeleton height={350}/>
        </div>
        </>
    }

const filterproduct=(cat)=>{
    const updatedlist = data.filter( (x)=>x.category===cat);
    setfilter(updatedlist)

}

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button type="button" class="btn btn-outline-dark" onClick={()=>setfilter(data)}>All</button>

                    <button type="button" class="btn btn-outline-dark" onClick={()=>filterproduct("men's clothing")}>Men's Clothing</button>

                    <button type="button" class="btn btn-outline-dark"  onClick={()=>filterproduct("women's clothing")}>Women's Clothing</button>

                    <button type="button" class="btn btn-outline-dark"  onClick={()=>filterproduct("jewelery")}>Jewelery</button>

                    <button type="button" class="btn btn-outline-dark"  onClick={()=>filterproduct("electronics")}>Electronics</button>

                </div>
                {
                    filter.map((product) => {
                        return (
                            <>
                                <div className='col-md-3 mb-4'>
                                    <div class="card h-100 text-center p-4 " key={product.id}>
                                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{product.title.substring(0, 12)}</h5>
                                            <p class="card-text">${product.price}</p>
                                            <NavLink className="btn btn-outline-dark" to={`/product/${product.id}`}>Buy Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </>
        )



    }

    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <h1>LETEST PRODUCTS</h1>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    {loading ? <Loading /> : <ShowProducts />}

                </div>

            </div>

        </div>
    )
}
