import React,{useContext,useEffect,useState} from 'react'
import AppContext from '../context/AppContext';

const TableProduct = ({cart}) => {
    const { addToCart, removeFromCart ,decreaseQty,clearCart} = useContext(AppContext);

    const [qty, setQty] = useState(0)
    const [price, setPrice] = useState(0)
  
    useEffect(() => {
        let qty=0;
        let price= 0;
        if(cart?.items){
        for(let i=0;i<cart.items?.length;i++){
        qty+=cart.items[i].qty
        price+= cart.items[i].price
        }
       }
         setPrice(price) 
         setQty(qty)
      }, [cart])

  return (
    <>
      <table className="table table-bordered border-primary text-center">
  <thead>
    <tr>
      <th scope="col" className='bg-dark text-light'>Product Img</th>
      <th scope="col" className='bg-dark text-light'>Title</th>
      <th scope="col" className='bg-dark text-light'>Price</th>
      <th scope="col" className='bg-dark text-light'>Qty</th>
      <th scope="col" className='bg-dark text-light'>Qty++</th>
      <th scope="col" className='bg-dark text-light'>Qty--</th>
      <th scope="col" className='bg-dark text-light'>remove</th>
    </tr>
  </thead>
  <tbody>
    {cart?.items?.map((product)=> (
    <tr>
      <th scope="row" className='bg-dark text-light'><img src={product.imgSrc} style={{width:"50px" , height:"50px"}} alt="" /></th>
      <td className='bg-dark text-light'>{product.title}</td>
      <td className='bg-dark text-light'>{product.price}</td>
      <td className='bg-dark text-light'>{product.qty}</td>
      <td className='bg-dark text-light'><span class="material-symbols-outlined" onClick={()=>addToCart(product?.productid, product.title, product.price/product.qty, 1, product.imgSrc)} >
add_circle
</span></td>
      <td className='bg-dark text-light'><span class="material-symbols-outlined"onClick={()=> decreaseQty(product.productId,1)}>
do_not_disturb_on
</span></td>
      <td className='bg-dark text-light'><span class="material-symbols-outlined" onClick={() => removeFromCart(product?.productId)}>
delete
</span></td>
    </tr>

    ))}
      
    <tr>
      <td className='bg-dark text-light'></td>
      <td className='bg-dark text-light'><button className=' btn btn-primary' style={{fontWeight:'bold'}}>Total</button></td>
      <td className='bg-dark text-light'><button className=' btn btn-warning' style={{fontWeight:'bold'}}>{price}</button></td>
      <td className='bg-dark text-light'><button className=' btn btn-warning' style={{fontWeight:'bold'}}>{qty}</button></td>
      <td className='bg-dark text-light'></td>
      <td className='bg-dark text-light'></td>
    </tr>
   
  </tbody>
</table>
    </>
  )
}

export default TableProduct
