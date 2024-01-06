import { useEffect, useRef, useState } from "react";
import Form from "./Form";
import { string } from "zod";
import Expandable from "./Expandable";
import ExpenseList from "./ExpenseList";
import FormTwo from "./FormTwo";
import Like from "./Like";
import ExpenseFilter from "./ExpenseFilter";
import ProducrList from "./ProducrList";
import FormThree from "./FormThree";
import FormThreeFilter from "./FormThreeFilter";
import FormThreeForm from "./FormThreeForm";
import Addresses from "./address";
import List from "./List";



//import Cart from "./Cart";
function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "utilities" },
    { id: 2, description: "bbb", amount: 20, category: "groceries" },
    { id: 3, description: "ccc", amount: 30, category: "entertainment" },
    { id: 4, description: "ddd", amount: 40, category: "utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  
  
  const [form , setForm] = useState([
      { Id: 1, name: "BINIAM", address: "ADAMA", salary: 21000, age: 23 },
      { Id: 2, name: "SAMUEL", address: "JIMMA", salary: 23000, age: 22 },
      { Id: 3, name: "BEZA", address: "ADAMA", salary: 22500, age: 21 },
      { Id: 4, name: "BRUK", address: "MEKELE", salary: 20500, age: 24 },
     ])
     const [selected,setSelected] = useState('');
     const appear = selected? form.filter((e)=>(e.address === selected)): form;
    //  const [selected, setSelected] = useState("");
    //  const visible = selected
    //   ? form.filter((e) => e.address === selected)
    //   : form;
 {form.map((e)=>e.address)}
     const ref = useRef<HTMLInputElement>(null);
  const [category,setCategory] = useState("");
  useEffect(()=>{
     document.title="my_app"
  })
  return (
    <> 
    <div>
     {/* <select className="form-select" onChange={(e)=>setCategory(e.target.value)} >
       <option value=""></option>
       <option value="Clothing">Clothing</option>
       <option value="Household">Household</option>
     </select> */}
     <List></List>
     <FormThreeForm ></FormThreeForm>
     <FormThreeFilter  onselect={(address) => setSelected(address)}
     ></FormThreeFilter>
     <FormThree prop={appear} onDelete={(id)=>
      setForm(form.filter((x)=>x.Id !== id))
     } ></FormThree>
     <br />
    </div>
      
      {/* <FormTwo students={student} onDelete={(id) => 
        setStudent(student.filter((e) => e.id !== id))}></FormTwo> */}
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(Id) => setExpenses(expenses.filter((e) => e.id !== Id))}/>
      <Form></Form>
      <Like></Like>
      <Expandable>
        A navigation bar is a user interface element within a webpage that
        contains links to other sections of the website. In most cases, the
        navigation bar is part of the main website template, which means it is
        displayed on most, if not all, of the pages within the website.The menu
        element represents a list of commands. The nav element represents a
        section of a page that links to other pages or to parts within the page:
        a section with navigation links. So, analog to "A cow is an animal but
        an animal is not a cow": a nav is a menu but a menu is not a nav ?.A nav
        bar is something at the top of the screen that controls a stack of
        views. Each view other than the first will have a back button. If you
        put extra buttons on there, it's still a nav bar. A toolbar is a bar at
        the bottom of the screen, that only contains buttons.
      </Expandable>
    </>
  );
}

export default App;
