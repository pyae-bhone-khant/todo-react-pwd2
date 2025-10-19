function Item({ item }) {
  return (
    <>
      <li className=" justify-center  items-center text-4xl text-orange-500 font-bold   flex flex-col " >{item.name}</li>
    </>
  )
}

export default function App() {
  const data = [
    { id: 3, name: 'React' },
    { id: 2, name: 'JavaScript' },
    { id: 1, name: 'Tailwind CSS' }
  ]
  return (
    <>
      <div className="text-9xl items-center text-center flex  justify-center  text-red-600 ">Hello React </div>

      <div className=" flex justify-center    ">

        <ol className="   list-decimal text-black bg-slate-300  w-200  h-full rounded-2xl flex  flex-col justify-center  text-center items-start px-4  mt-20 space-y-10 ">

          {data.map(item => <Item key={item.id} item={item} />)}
        </ol>
      </div>
    </>
  )
}    