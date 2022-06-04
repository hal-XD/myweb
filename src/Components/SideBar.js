import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="bg-blue-600 w-2/12" >
         <div className='fixed h-3/6 w-2/12'>
          <ul className="text-black font-extrabold text-center">
           <li className="hover:bg-blue-300 m-2"><Link to="/">Home</Link></li>
           <li className="hover:bg-blue-300 m-2"><Link to="/game">Game</Link></li>
           <li className="hover:bg-blue-300 m-2"><Link to="/todo">ToDo</Link></li>
          </ul>
         </div>
        </div>
    )
}
