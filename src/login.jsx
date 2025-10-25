export default function Login  () {
    return (
        <div className="px-40">  
                    <div>
            <h1 className="text-4xl font-bold mt-10">Contact Us</h1>
            <p className="text-slate-600 mt-4">Feel free to reach out to us with any questions, comments, or inquiries you may have. We're here to help and look forward to hearing from you!</p>
                    </div>
             <form action="" className="py-4 mt-4 border-t flex flex-col gap-5">
            <div className="flex flex-col gap-2">
                <label htmlFor="fullname">Full name </label>
                <input className="shadow-md px-6 py-2 border border-slate-300" type="text" placeholder="john Doe" />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email </label>
                <input className="shadow-md px-6 py-4 border border-slate-300" type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="flex flex-col gap-2">
                    <label htmlFor="Your message">Your message </label>
                    <textarea className="shadow-md px-6 py-4 border-slate-300 h-40" name="" id="" placeholder="type your message here"></textarea>
            </div> 
               <button className="bg-green-700 p-3 rounded-2xl hover:opacity-80 font-bold text-white text-2xl ">send</button> 
                <div className="flex flex-col">
                    <div className="px-5 py-2  rounded text-2xl text-red-600 bg-slate-300">error message</div>

                </div>
             </form>
        </div>
    )
}