import React from 'react'

import { z } from "zod";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Addresses from './address';

const schema = z.object({
  id: z.number()  ,
  name: z.string().min(4,{message:'Name must be atleast 4 characters'}).max(50),
  Address: z.enum(Addresses) ,
  salary: z.number().min(1_000).max(100_000)  ,
})
// interface props{
//   onSubmit:(data: FormData)=> void
// }
type FormData = z.infer<typeof schema>
const FormThreeForm = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<FormData>({resolver:zodResolver(schema)})

  return (
     <form onSubmit={handleSubmit(data=>console.log(data))} >
      <div className='mb-3'>
        <label htmlFor="id" className='form-label'>ID</label>
        <input {...register('id', {valueAsNumber:true})} id='id' type="number" className='form-control'/>
        {errors.id && <p className='text-danger'>{errors.id.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor="name" className='form-label'>Name</label>
        <input {...register('name')} id='name' type="text" className='form-control'/>
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor="address" className='form-label'>Address</label>
        <select {...register('Address')} id="address" className='form-select'>
          <option value=''></option>
          {Addresses.map(address => <option key={address} value={address}>{Addresses}</option>)}
          {/* <option value="ADAMA">ADAMA</option>
          <option value="JIMMA">JIMMA</option>
          <option value="MEKELE">MEKEL</option> */}
         {errors.Address && <p className='text-danger'>{errors.Address.message}</p>}
        </select>
      </div>
      <div className='mb-3'>
        <label htmlFor="salary" className='form-label'>Salary</label>
        <input {...register('salary',{valueAsNumber:true})} id='salary' type="number" className='form-control'/>
        {errors.salary && <p className='text-danger'>{errors.salary.message}</p>}
      </div>
      <div>
        <button className='btn btn-success mb-5'  >Submit</button>
      </div>
     </form>
  )
}

export default FormThreeForm