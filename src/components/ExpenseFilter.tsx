import React from "react";
interface props {
  onSelectCategory : (category:string) => void;
}
const ExpenseFilter = ({onSelectCategory}:props) => {
  return (
  <select className="form-select form-select-lg mb-3" onChange={(event)=>onSelectCategory(event.target.value)}>
     <option value="">All categories</option>
     <option value="groceries">Groceries</option>
     <option value="utilities">Utilities</option> 
     <option value="entertainment">Entertainment</option>  
  </select>
  

  )
};

export default ExpenseFilter;
