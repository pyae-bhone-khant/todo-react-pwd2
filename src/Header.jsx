export default function Header({data}) {
    return (
            <div className="w-full flex justify-center h-15 text-center items-center bg-blue-900 text-white">
                <h1 className="text-3xl font-bold">Todo <span className="text-red-600"> {data.length}</span></h1>
            </div>
    )
}