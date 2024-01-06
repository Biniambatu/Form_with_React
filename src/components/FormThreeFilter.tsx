import React from 'react'
import { string } from 'zod';
import Addresses from './address';
 

interface props{
  onselect:(address:string)=>void;
}

const FormThreeFilter = ({onselect}:props) => {
  return (
   <div>
    <select className='form-select' onChange={(e)=>onselect(e.target.value)}>
      <option value="all">Category by Address</option>
      {Addresses.map((address) => <option key={address} value={address}>{Addresses}</option>)}
      {/* <option value="ADAMA">ADAMA</option>
      <option value="JIMMA">JIMMA</option>
      <option value="MEKELE">MEKELE</option> */}
    </select>
    <br />
   </div>
  )
}

export default FormThreeFilter