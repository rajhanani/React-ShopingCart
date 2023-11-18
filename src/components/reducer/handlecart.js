const intialstate =[];

const handlecart =(state=intialstate,action)=>{
    const  product = action.payload;
    switch(action.type){
        case "ADDCART":
        // check if product is alredy exits 
        const exits = state.find((x)=>x.id=== product.id );
        if(exits){
            // increase the quantity
            return state.map( (x)=>
            x.id===product.id ? {...x, qty: x.qty + 1}: x);

        }else{
            const product = action.payload;
            return[
                ...state,
                {
                   ...product,qty:1,
                }
            ]
        }       
        break;

        case "DELETECART":
            const exits1=state.find((x)=>x.id === product.id);
            if(exits1.qty ===1){
                return state.filter((x)=>x.id !== exits1.id )
            }else{
                return state.map( (x)=> x.id=== product.id? {...x, qty: x.qty-1}:x );
            }
            break;

            default:
                return state;
            break; 
          
    }

}

export default handlecart;