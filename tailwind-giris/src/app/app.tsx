import {useEffect, useState} from "react";
import Card from "../components/Card";

const kahve = {
  title: "Banana Iced Coffee",
  description: "A banana iced coffee ",
  ingredients: "Coffee, Banana, Ice",
  image:
    "https://www.chiquita.fr/wp-content/uploads/2022/07/T-220706_DEC_Banana-Coffee-frappe.jpg",
  id: 7,
};


const App = () => {

  const [CoffeeList, setCoffeeList] = useState([kahve,kahve]);

  useEffect(() => {
    const apiUrl = "https://api.sampleapis.com/coffee/iced";
    fetch(apiUrl)
      .then(response => response.json())
      .then(CoffeeList => {
        setCoffeeList(CoffeeList);
      })
  }, []);
  
  return (
    <div className='bg-slate-100 h-screen flex flex-col  items-center'>
      {CoffeeList.map((kahve) => (
        <Card kahve={kahve}/>))}
    </div>
  )
}

export default App