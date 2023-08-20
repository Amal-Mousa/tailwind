import Link from 'next/link';

const ShopNav = () =>{
  return(
    <nav className="flex gap-8 justify-center items-center font-semibold p-4">
      <Link href='/shop/cart'>cart</Link>
      <Link href='/shop/products'>products</Link>
    </nav>
  )
}

export default ShopNav;
