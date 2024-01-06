import React, { useEffect, useState } from 'react'
 interface props{
    category:string;
  }
const ProducrList = ({category}:props) => {
 
  const [product,setProduct] = useState<string[]>([])
   
  useEffect(() => {
    console.log('Fetching products in ',category);
    setProduct(['Clothing','Household'])
   },[category]) 
  
  return (
    <div>ProducrList</div>
  )
}

export default ProducrList