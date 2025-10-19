import Item from './Item.jsx'
import { useState } from 'react'
import { useRef } from 'react'
import Header from './Header.jsx'

export default function App() { 
  const nameInput = useRef()
  const [data, setData] = useState([
    { id: 3, name: 'React' , done : false},
    { id: 2, name: 'JavaScript', done : false },
    { id: 1, name: 'Tailwind CSS' , done : true}
  ])

  const add = () => {
    const id = data[0].id + 1;
    const name = nameInput.current.value;
    setData([{ id, name  , done : false}, ...data]);
  } 
   const del = (id) => {
    setData(data.filter(item => item.id !== id));
   }
    
   const toggle = id => {
  setData(data.map(item => 
    item.id === id 
      ? { ...item, done: !item.done } 
      : item
  ));
};

     
  return (
    <>
      <Header data={data} />
      <div className='flex justify-center mt-10'>
               <form  className='' onSubmit={ e => {
                e.preventDefault();
                add();
                e.currentTarget.reset();
               }}  > 
                   <input  placeholder='Write some text' className='w-100 h-10 border-2 rounded-2xl border-red-400' type="text" ref={nameInput} />
        <button  className= ' ml-3 text-white font-bold rounded hover:bg-red-400   px-12 py-2 bg-blue-600'>Add</button>
               </form>
      </div>
      <div className=" flex justify-center    ">

        <ol className="bg-slate-300  w-200  h-full rounded-2xl flex  flex-col justify-center  text-center items-start px-4  mt-10 space-y-10 ">

          {data.filter(item => !item.done).map(item => <Item key={item.id} del={del} item={item} toggle={toggle} />)} 
          
        </ol> 
                 
      </div>  
       <div className='flex justify-center'>

      <div className='mt-10 border border-orange-500 w-300 flex items-center text-center justify-center' ></div>  
       </div>
         <div className=" flex justify-center    ">

        <ol className="bg-slate-300  w-200  h-full rounded-2xl flex  flex-col justify-center  text-center items-start px-4  mt-20 space-y-10 ">

          {data.filter(item => item.done).map(item => <Item key={item.id} del={del} item={item} toggle={toggle} />)} 
          
        </ol> 
         <hr /> 
          
      </div> 
      
    </>
  )
}    