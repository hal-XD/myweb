import { Link } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className="bg-red-600 w-2/12" >
            <p>side test</p>
            <ul class="text-black font-extrabold text-center">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/game">Game</Link></li>
                <li><Link to="/todo">ToDo</Link></li>
            </ul>
        </div>
    )
}
