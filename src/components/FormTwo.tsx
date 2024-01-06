import React from "react";
interface stud {
  id: number;
  name: string;
  address: string;
  salary: number;
  age: number;
}
interface props {
  students: stud[];
  onDelete:(id:number) => void;
}
const FormTwo = ({ students,onDelete }: props) => {
  return (
    <table className="table table-borderd">
      <thead>
        <tr>
          <td>Students Form</td>
        </tr>
      </thead>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Address</td>
          <td>Salary</td>
          <td>Age</td>
        </tr>
      </thead>
      <tbody>
        {students.map((stu) => (
          <tr>
            <td>{stu.id}</td>
            <td>{stu.name}</td>
            <td>{stu.address}</td>
            <td>{stu.salary} ETB</td>
            <td>{stu.age}</td>
            <button className="btn btn-outline-danger" 
              onClick={()=>onDelete(stu.id)}>Delete</button>
          </tr>
        ))}
      </tbody>
      <tfoot>
         <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{students.reduce((acc,student)=> student.salary + acc,0 ).toFixed(0)} ETB</td>
            <td>Avg_age({students.reduce((acc,student) => student.age + acc,0 )/students.length})</td>
         </tr>
      </tfoot>
    </table>
  );
};

export default FormTwo;
