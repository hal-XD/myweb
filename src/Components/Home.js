import { useState } from "react"

import "../index.css"
//import "../out.css"

export default function Home() {
    const [cjsx, setJsx] = useState(0);
    return(
        <div className="bg-yellow-300 w-10/12" >
            <h1>Home</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded" onClick={()=>setJsx(0)}>RESET</button>
            <button className="bg-blue-500 hover:bg-green-700 text-white font-mono py-2 px-4 rounded" onClick={() => {
                setJsx(cjsx+1)
            }}>Add a Content.</button>
            <h1>cout: {cjsx}</h1>
            {([...Array(cjsx)]).map((x)=><p>clicked</p>)}

            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                   className="w-full"
                  src="https://source.unsplash.com/random/1600x900/"
                  alt="Sunset in the mountains"
                ></img>
            </div>
        </div>
    )
}