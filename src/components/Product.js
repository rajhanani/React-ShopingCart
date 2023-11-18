import React from 'react'
import { useState,useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux';
import { addtocart } from './action';

export const Product = () => {
    const {id}= useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addproduct = (product)=>{
             dispatch(addtocart(product));
    }

    useEffect(() => {
        const getproduct = async () => {
            setLoading(true);
            const response = await fetch(`http://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);

        }
        getproduct()
    }, [])

    const Loading=()=>{
        return(
            <>
            ...loading............
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <>
            <div className='col-md-6'>
                <img src={product.image} alt={product.title}
                height="440px" width="400px"/>
            </div>

            <div className='col-md-6'>
                <h4 className='text-uppercase text-black-50'>{product.category }</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    ${product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <button type="button" class="btn btn-outline-dark" onClick={()=>addproduct(product)}>Add to Cart</button>
                <NavLink to="/cart" className="btn btn-dark ms-2 px py-2">Go To Cart</NavLink>
            </div>


              </>
        )
    }


  return (
    <div>

<div className='container'>
    <div className='row'>
{ loading? <Loading/>:<ShowProduct/>}
    </div>
</div>
    </div>
  )
}
