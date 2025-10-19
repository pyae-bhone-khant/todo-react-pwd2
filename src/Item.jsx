import App from "./App"

export default function Item({ item , del , toggle }) {
  return (
    <>
      <li className=" bg-white/80  mt-2 mb-2 px-20 rounded-2xl text-2xl font-bold  flex items-center justify-between w-full">
      <span className="text-red-400">{item.name}</span>
      <div className="flex gap-4">

      <button onClick={() => del(item.id)} className="text-sm px-3 py-1 hover:opacity-80 bg-blue-600 rounded-2xl text-white">Delete</button>
      <button onClick={() => toggle(item.id)} className="text-sm  px-3 py-1 hover:opacity-80 bg-blue-600 rounded-2xl text-white">
        {item.done ? ' Undo' : 'Check'}
      </button>
      </div>
    </li>
    </>
  )
}