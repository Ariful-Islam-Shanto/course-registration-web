import { useState } from 'react'
import { toast } from 'react-toastify'
import './App.css'
import Cards from './Components/Cards/Cards'
import CartBox from './Components/Cart Box/CartBox'


function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [creditHour, setCreditHour] = useState(0);
  const [courseName, setCourseName] = useState([]);


  const creditHours = 20;
  const Remaining = creditHours - creditHour;

  const handleCreditHour = (price, credit_hours, title) => {
    let addingHour = creditHour + credit_hours;
    if(courseName.includes(title)) {
      return toast('Already added. Cannot add twice.');
    }
    if(Remaining < credit_hours) {
       toast('Do not have enough hours remaining.');

       if(addingHour > 20) {
        return toast("Credit hours cannot exceed it's maximum limit.")
      }
      return;
    }
    setTotalPrice(totalPrice + price);
    
    setCreditHour(creditHour + credit_hours);
    
    const allCourse = [...courseName, title];
    setCourseName(allCourse);
  }
  console.log(courseName);
  return (
    <>
     <div className='bg-gray-100 max-w-screen-xl mx-auto py-8 md:px-6   px-8 lg:px-8 xl:px-0'>
       <h1 className='text-4xl text-center font-bold text-black'>Course Registration</h1>
       <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2'>
       <div className='md:w-2/3 lg:w-3/4'>
       <Cards handleCreditHour={handleCreditHour} ></Cards>
       </div>
       <div className='md:w-1/3 lg:w-1/4 py-8'>
         <div className='bg-white rounded-xl p-8 space-y-4'>
          <h1 className='md:text-sm  lg:text-sm xl:text-lg font-bold text-blue-600  border-gray-400'>Credit Hour Remaining : {Remaining} hr</h1>
          <hr />
          <h1 className='md:text-xl lg:text-xl xl:text-2xl font-bold text-black mb-4'>Course name</h1>
          {courseName.map((name, index) =>  <CartBox creditHour={creditHour} totalPrice={totalPrice} index={index} name={name} ></CartBox>)}
          <h1 className='text-left md:text-sm lg:text-sm xl:text-lg font-medium text-black  '>Total credit hour : {creditHour}</h1>
         <hr />
         <h1  className='text-left md:text-sm lg:text-sm xl:text-lg font-medium  text-black '>Total price : {totalPrice} USD</h1>
         </div>
       </div>
       </div>
     </div>
    </>
  )
}

export default App
