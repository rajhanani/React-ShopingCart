// for add to cart............

export const addtocart=(product)=>{
    return {
        type:"ADDCART",
        payload:product
    }
}

export const deletetocart =(product)=>{
    return {
        type:"DELETECART",
        payload:product
    }
}