import { useState } from "react"

import "../index.css"

export default function Home() {
    const [cjsx, setJsx] = useState(0);
    return(
        <div className="content">
            <h1>Home</h1>
            <button onClick={() => {
                setJsx(cjsx+1)
            }}>Add a Content.</button>
            <h1>cout: {cjsx}</h1>
        </div>
    )
}