import React from 'react'
import Button from './Button/Button';

interface student{
    Id:number;
    name:string
    address:string
    salary:number
}
interface props{
    prop:student[]
    onDelete: (id:number)=> void;
}
const FormThree = ({prop,onDelete}:props) => {
  // if (prop.length === 0) return null;
  return (
      <table className='table table-striped-columns'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Address</td>
            <td>Salary</td>
          </tr>
        </thead>
        <tbody>
            {prop.map((x)=>(
              <tr>
                <td>{x.Id}</td>
                <td>{x.name}</td>
                <td>{x.address}</td>
                <td>{x.salary}</td>
                <button className='btn btn-outline-danger' 
                  onClick={()=>onDelete(x.Id)}  >Delete</button>
              </tr> 
           ))}
        </tbody>
        <tfoot>
           <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>
               {prop.reduce((acc,stud) => stud.salary + acc ,0)}</td>
            <td></td>
           </tr>
        </tfoot>
      </table>
    )
}

export default FormThree