import Item from './Item.jsx'
import { useState, useRef, useEffect } from 'react'
import Header from './Header.jsx'

export default function App() { 
  const nameInput = useRef()
  const [darkMode, setDarkMode] = useState(false)
  const [data, setData] = useState([
    { id: 3, name: 'React' , done : false},
    { id: 2, name: 'JavaScript', done : false },
    { id: 1, name: 'Tailwind CSS' , done : true}
  ])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const add = () => {
    const id = data.length ? data[0].id + 1 : 1;
    const name = nameInput.current.value.trim();
    if (!name) return;
    setData([{ id, name, done: false }, ...data]);
  }

  const del = id => setData(data.filter(item => item.id !== id));
  
  const toggle = id => {
    setData(data.map(item => 
      item.id === id ? { ...item, done: !item.done } : item
    ));
  };

  return (
    <div className=" min-h-screen  transition-colors duration-300" 
      style={{ backgroundColor: darkMode ? 'var( --bg-color)' : 'var(--bg-color)', color: darkMode ? 'var(--text-color)' : 'var(--text-color)' }}>
      <Header data={data} darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <div className='   flex justify-center mt-10'>
        <form onSubmit={ e => {
          e.preventDefault();
          add();
          e.currentTarget.reset(); 
        }}> 
          <input 
            placeholder='Write some text'
            className='w-100  text-sky-800 h-10 border-2 rounded-2xl'
            style={{ borderColor: 'var(--border-color)' }}
            type="text"
            ref={nameInput}
          />
          <button className='btn ml-3  text-white hover:opacity-80'>Add</button>
        </form>
      </div>

      <div className="flex justify-center">
        <ol className="card w-200 h-full mt-10 space-y-5 text-left">
          {data.filter(item => !item.done).map(item => 
            <Item key={item.id} del={del} item={item} toggle={toggle} />
          )}
        </ol>
      </div>

      <div className='flex justify-center'>
        <div className='mt-10 w-300 flex items-center text-center justify-center' style={{ border: `1px solid var(--border-color)` }}></div>  
      </div>
      
      <div className="flex justify-center">
        <ol className="card w-200 h-full mt-10 space-y-5 text-left">
          {data.filter(item => item.done).map(item => 
            <Item key={item.id} del={del} item={item} toggle={toggle} />
          )}
        </ol>
      </div>
    </div>  
  )
}
