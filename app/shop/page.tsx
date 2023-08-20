'use client'

import { useRouter } from "next/navigation";

const Shop = () =>{

  const router = useRouter();

  return(
    <>
    <div>Shop</div>
    <button onClick={()=> router.push("/shop/cart")}>Go to cart</button>
    </>
  )
}

export default Shop;
