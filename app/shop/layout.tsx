import type { Metadata } from 'next'
import { ShopNav } from '../components';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Shop Layout',
}

const ShopLayout = ({children}: {children: React.ReactNode}) =>{
  return(
    <div>
      <ShopNav/>
      {children}
      </div>
  )
}

export default ShopLayout;
